import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  useAccount,
  usePrepareContractWrite,
  useContractWrite,
  useContractRead,
  useNetwork
} from "wagmi";
import contractAbi from "../config/abis/YourContract.json";
import { Button, Anchor, Flex } from '@mantine/core';
import { Page } from '../Page'


export function YourContract({ label = undefined }) {

  const { address } = useAccount();
  const { chain } = useNetwork()

  const [greeting, setGreeting] = useState('')
  const [updating, setUpdating] = useState(false)


  console.log('Test', {address, chain})

  // const YOURR_CONTRACT_ADDRESS = '0xCD25408B05F83B0e19D63c27BCCd79AC6fE6f87F'
  const YOURR_CONTRACT_ADDRESS = '0xC3d940Caf1f353a24A06CEc13c9ebE5ae3350c2C'

  const { config } = usePrepareContractWrite({
    address: YOURR_CONTRACT_ADDRESS,
    abi: contractAbi,
    functionName: "setGreeting",
    args: ['world'],
    enabled: true
  });
  const { write: mint } = useContractWrite(config);


  const { data: greetingValue, refetch } = useContractRead({
    address: YOURR_CONTRACT_ADDRESS,
    abi: contractAbi,
    functionName: "greeting",
    args: [],
  });

  // useEffect(() => {
  //   if (greetingValue) {
  //     setGreeting(greetingValue as string)
  //   }
  // }, [greetingValue])

  useEffect(() => {
    if (updating) {
      setUpdating(false)
    }
  }, [updating])


  const interval = useRef<any>()

  const handleClick = useCallback(() => {
    if (mint) {
      setUpdating(true)
      mint()
      interval.current = setInterval(() => {
        refetch()
      }, 1000)
      setTimeout(() => {
        if (interval.current) {
          clearInterval(interval.current)
        }
      }, 100000)
    }
  }, [mint, refetch])

  useEffect(() => {
    if (interval.current) {
      clearInterval(interval.current)
    }
  }, [updating, interval]);

  return <Page title={"test "}>

    <Flex align={'center'} justify={'center'} direction={'column'} gap={'1rem'} style={{ flex: 1 }}>
      <Button
        loading={updating}
        size={'lg'}
        onClick={handleClick}
      >
        update
      </Button>

      {chain?.blockExplorers?.default.url && <Anchor href={`${chain?.blockExplorers?.default.url}/address/${address}#tokentxnsErc721`} target="_blank">Block Explorer</Anchor>}

    </Flex>

  </Page>
}
