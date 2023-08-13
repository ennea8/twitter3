# Engage users to web3 start from twitter

## Quickstart


0. prepare

```
git clone https://github.com/ennea8/twitter3.git
cd twitter3
yarn install
```

1. Running web

```bash
cd packages/web
npm start

```

## Directories

```bash
1.contract
packages/hardhat # contract dev
packages/nextjs  # interdace for local contract debug

2. web
packages/web  # dapp interface

3. server
packages/server  # for customized auth logic, server side validation, twitter api endpoint etc.

```













##

## verify

npx hardhat verify --network baseGoerli 0xCD25408B05F83B0e19D63c27BCCd79AC6fE6f87F 0x5BAffe69A179F14358Cb8346A5be19bf71A8d259




## base
yarn deploy --network base

npx hardhat verify --network base 0xC3d940Caf1f353a24A06CEc13c9ebE5ae3350c2C 0x5BAffe69A179F14358Cb8346A5be19bf71A8d259

