import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  useAccount,
  usePrepareContractWrite,
  useContractWrite,
  useContractRead,
  useNetwork
} from "wagmi";
import contractAbi from "../config/abis/NRO.json";
import networkConfig from '../config/base.json'
import { Button, Anchor, Flex } from '@mantine/core';
import { Page } from '../Page'


export function TestNRO({ label = undefined }) {

  const { address } = useAccount();
  const { chain } = useNetwork()

  const [greeting, setGreeting] = useState('')
  const [updating, setUpdating] = useState(false)


  console.log('Test', {address, chain})

  // const YOURR_CONTRACT_ADDRESS = '0xCD25408B05F83B0e19D63c27BCCd79AC6fE6f87F'
  const YOURR_CONTRACT_ADDRESS  = networkConfig.contracts.NRO

  const { config } = usePrepareContractWrite({
    // @ts-ignore
    address: YOURR_CONTRACT_ADDRESS,
    abi: contractAbi,
    functionName: "freeMint",
    args: [],
    enabled: true
  });
  const { write: mint } = useContractWrite(config);


  useEffect(() => {
    if (updating) {
      console.log('useEffect setUpdating false')
      setUpdating(false)
    }
  }, [updating])

  const handleClick = useCallback(async () => {
    console.log('handleClick')
    if (mint) {
      console.log('handleClick setUpdating false')
      setUpdating(true)
      const ret = await mint()

      console.log('mint result ', ret)
    }
  }, [mint])


  return <Page title={"test "}>

    <Flex align={'center'} justify={'center'} direction={'column'} gap={'1rem'} style={{ flex: 1 }}>
      <Button
        loading={updating}
        size={'lg'}
        onClick={handleClick}
      >
        free mint
      </Button>

      {chain?.blockExplorers?.default.url && <Anchor href={`${chain?.blockExplorers?.default.url}/address/${address}#tokentxnsErc721`} target="_blank">Block Explorer</Anchor>}

    </Flex>

  </Page>
}
