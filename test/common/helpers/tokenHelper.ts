import { AssetStructsUpgradeable } from "src/types/NeatFiV1";
import TokenType from "../enums/tokenType";

export const buildToken = (
  erc20Mock: any,
  tokenId: number = 0,
  amount: number = 100,
  tokenType: number = TokenType.ERC20
): AssetStructsUpgradeable.TokenStruct => ({
  tokenContract: erc20Mock.address,
  tokenId,
  amount,
  tokenType,
});
