## Basic Figma File Guide
### Exporting
1. Select the layer to export
   * On the toolbar on the left-hand side, select 'Assets'
   * Left-click the layer (e.g. `Final Image (07-03-26)`)
2. Export the image
   * On the toolbar on the right-hand side, select the 'Design' tab and scroll 
    to the bottom of the tab. You will see an 'Export' section.
   * In the drop-down box, select 'SVG'
   * Click `Export Final Image (07-03-26)`

### Implementation Notes

#### Chips
Chips follow [Material 3](https://m3.material.io/components/chips/specs)
design guidelines. Icons are from https://fonts.google.com/icons.

Chip content was converted to a vector, due to multiple iterations of resizing 
the content.

Due to the vectorization, a traditional border may not be added. 
Instead, a black rectangle, 2px larger than the chip is used to create the 
border by being placed underneath the chip content.  
Revisit this if Figma adds native border support.

#### Phone Image

Sourced from https://app.rotato.app/

> You can use videos and images produced and exported from Rotato in any of your awesome works, commercially or not. This usage license is similar to that of other video and image processors, like Photoshop and After Effects: you are responsible for the end product, and the assets you use. For the specific devices that look like products that are sold in stores, there may be rules in your country regarding when and where you can use these. We recommend either checking up on those rules, or simply using the Generic Device or the Universal Device which are always okay to use anywhere, any time.
>
> You obviously maintain the rights for your own designs imported into Rotato, as well as videos and images exported from Rotato.

https://rotato.app/about/terms#exports-from-rotato

#### Card Image

From the 'xiehanzi' deck: https://ankiweb.net/shared/info/1063372083

* Suspend all but **中文**
* Enable the new study screen (Settings > New Study Screen)
* Review **Card 5** of the template
* Open the card settings (click the first of the 6 buttons)
    * Disable Zhuyin
* Press > on the in-card UI to go to character 2 (**文**)
* Draw the first two strokes on the in-card UI
  * This showcases that Anki is interactive

A time of 9:41 was selected to match Apple.

### Extensions Used for Design
1. Clay Mockups 3D
2. SVG Parser
3. SkewDat

## Future extensions

* Previous iterations of the design have been included in the Figma File. 
  * In the future, use git history.
* The SVG exported by the Figma file stores the text as a path.
  * For i18n, this will need to be converted to a text node, or an overlay 
    should be used.
