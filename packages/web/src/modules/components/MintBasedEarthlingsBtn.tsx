import React, {useCallback, useEffect, useRef, useState} from "react";
import {
  useAccount,
  usePrepareContractWrite,
  useContractWrite,
  useContractRead,
  useNetwork
} from "wagmi";
import contractAbi from "../../config/abis/BasedEarthlings.json";
import networkConfig from '../../config/base.json'
import {Button, Anchor, Flex, Card, Group, Badge, Image, Text} from '@mantine/core';


export  const MintBasedEarthlingsBtn =({label = undefined})=> {

  const {address} = useAccount();
  const {chain} = useNetwork()

  const [greeting, setGreeting] = useState('')
  const [updating, setUpdating] = useState(false)


  console.log('Test', {address, chain})

  // const YOURR_CONTRACT_ADDRESS = '0xCD25408B05F83B0e19D63c27BCCd79AC6fE6f87F'
  const YOURR_CONTRACT_ADDRESS = networkConfig.contracts.BasedEarthlings

  // claim(address, uint256, address, uint256, (bytes32[],uint256,uint256,address), bytes)
  /*
  * 1	_receiver	address	0x6c579efdA4CD90842D0E8eacD183A9E3cA88503c
    2	_quantity	uint256	1
    3	_currency	address	0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE
    4	_pricePerToken	uint256	0
    4	_allowlistProof.quantityLimitPerWallet	uint256	25
    4	_allowlistProof.pricePerToken	uint256	0
    4	_allowlistProof.currency	address	0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE
    6	_data	bytes	0x
  * */

  const {config} = usePrepareContractWrite({
    // @ts-ignore
    address: YOURR_CONTRACT_ADDRESS,
    abi: contractAbi,
    functionName: "claim",
    args: [
      address,
      1,
      "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
      0,
      [25, 0, '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'],
      '0x'],
    enabled: true
  });
  //console.log('config', config)

  const {write: mint} = useContractWrite(config);


  useEffect(() => {
    if (updating) {
      //console.log('useEffect setUpdating false')
      setUpdating(false)
    }
  }, [updating])


  const handleClick = useCallback(async () => {
    //console.log('handleClick', mint)
    if (mint) {
      console.log('handleClick setUpdating false')
      setUpdating(true)
      const ret = await mint()

      console.log('mint result ', ret)
    }
  }, [mint])


  return <Button
    loading={updating}
    size={'lg'}
    onClick={handleClick}
  >
    free mint
  </Button>
}


export  default MintBasedEarthlingsBtn
