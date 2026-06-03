export class BrowserHelper {
    static async maximize(page) {
        const client = await page.context().newCDPSession(page);

        const { windowId } = await client.send('Browser.getWindowForTarget');

        await client.send('Browser.setWindowBounds', {
            windowId,
            bounds: {
                windowState: 'maximized'
            }
        });
    }
}