import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x1ED13D8A3c2be0Eb034D12BC3f2048245a45022d",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "cute hunter",
        description: "This NFT will give you access to HunterDAO!",
        image: readFileSync("scripts/assets/hunter.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()