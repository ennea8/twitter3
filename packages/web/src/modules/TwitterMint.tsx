import {Button, Anchor, Flex} from '@mantine/core';
import {Input, Tooltip, Card, Code} from '@mantine/core';
import {IconBrandTwitter, IconAlertCircle, IconDeviceMobileSearch, IconSearch} from '@tabler/icons-react';
import {Page} from '../Page'

export function TwitterMint() {

  return <Page title={'Mint your Twitter post as NFT'}>

    <Code block>
      Step1: paste your twitter post url
      <br/>
      Step2: click to mint
      <br/>
      Welcome onboard ^_^
    </Code>

    <Flex align={'center'} justify={'center'} direction={'column'} gap={'1rem'} style={{flex: 1}} mt={"50px"}>

      <Input
        w={{base:'80%'}}
        icon={<IconBrandTwitter size="1rem"/>}
        placeholder="parst your twitter post url"
        rightSection={
          <Tooltip label="This is public" position="top-end" withArrow>
            <div>
              <IconSearch size="1rem" style={{display: 'block', opacity: 0.5}}/>
            </div>
          </Tooltip>
        }
      />


      <Button
        mt="200px"
        w={{base:'80%'}}
        data-disabled
        sx={{ '&[data-disabled]': { pointerEvents: 'all' } }}
        onClick={(event) => event.preventDefault()}
      >Mint</Button>

    </Flex>
  </Page>

}
