import React, {useCallback, useEffect, useRef, useState} from "react";
import {
  useAccount,
  usePrepareContractWrite,
  useContractWrite,
  useContractRead,
  useNetwork
} from "wagmi";

import {Button, Anchor, Flex, Card, Group, Badge, Image, Text} from '@mantine/core';
import {Page} from '../Page'
import networkConfig from '../config/base'

export function FreeMint({label = undefined}) {

  return <Page title={'Free Mint'}>
      {
        networkConfig.freeMintItems.map((item, index) => {
          return (<Card shadow="sm" radius="md" withBorder key={index} mt={"30px"} w={{base: 200, sm: 400, lg: 500}}>

            <Image
              src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
              height={160}
              alt="Norway"
            />

            <Group position="apart" mt="md" mb="xs" >



              <Text weight={500}>{item?.name}</Text>

              <Text size="sm" color="dimmed">
                {item?.description}
              </Text>
              <Badge color="pink" variant="light">
                Mint
              </Badge>
            </Group>
          </Card>)
        })
    }
  </Page>
}
