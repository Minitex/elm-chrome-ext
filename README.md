# elm-chrome-ext
Chrome Browser extension for eLibrary MN

## Modifications
Here are some potential modifications and tips for how to accomplish them:

### Overall Changes
To change the name and/or description of the extension, edit the relevant declarations in manifest.json.

You will also need to create derivatives - in PNG format only - of the extension logo at the following sizes (in pixels):

* 16 x 16
* 32 x 32
* 64 x 64
* 128 x 128

Save the image files in the /images folder AND be sure to update the file names in both the page_action AND icons sections of manifest.json.

### Change Callout Box Link
To change the URL that the callout box links to, edit the value for href="" in line 8 of callout.html

### Edit Callout Box Text
The callout box text can be edited in callout.html - see lines 12-17.

### Edit Image/Logo in Callout Box
To change the image that appears at the top of the callout box:

1) Save your new image to the /images folder on your local working copy of the repository. SVG format works best for quality, but PNG or JPG may work depending on your needs.

2) In callout.html - line 8, update the file name in the src="" attribute to the name of your new image file. Don't forget to update the alternate text value (in alt="") as well.

3) Update line 27 of manifest.json with the name of your new image file.
