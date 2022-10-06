import {expect} from "chai";
import ProductsScreen from "../../../screens/android/productsScreen";
import ItemScreen from "../../../screens/android/itemScreen";

describe('Products screen', () => {
    const productsScreen = new ProductsScreen();
    const itemScreen = new ItemScreen();

    it('Add product to catalog', async () => {
        // Scroll screen to the end
       await driver.$('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1)');
       // Get name of fifth element from the list
       const itemName = await productsScreen.getItemName(2);
       // Select item with index 5
        await productsScreen.selectItem(2);
       // Verify product name
       await expect(await itemScreen.getItemName()).contains(itemName);
    })
})