import FacetH1 from "../FacetH1"
import FacetParagraph from "../FacetParagraph"
import { documentationIds } from "../../constant"
import FacetBlockQuote from '../FacetBlockQuote';

export default () => {
    return <>
        <FacetH1 id={documentationIds.download}>Download and install the facet extension</FacetH1>
        <FacetParagraph color={"#5D5D5D"}>

            Download the latest version of the <a href="http://cdn.facet.run/extension-chrome-facet-ninja.zip">facet extension</a>. Unzip the folder and load it as an extension in your chrome browser via the
            <b>"Load unpacked"</b> option. 
            <br/>

            <br/>
            Navigate to <b>"chrome://extensions"</b> in the Chrome browser and enable <b>"Developer mode"</b> in the top right corner. In the top left corner, select <b>"Load unpacked"</b> {'->'} <b>"Load the unzipped folder"</b> and open the unzipped facet extension folder. The extension should be installed in your browser.
            <br />
            <br />
            <br />
            <div style={{ textAlign: 'center' }}>
                <figure>
                    <img width='75%' src='../../images/download_extension.png' />
                    <figcaption><i>Installing facet extension in Chrome</i></figcaption>
                </figure>
            </div>
            <br />

            <FacetBlockQuote>
                We are actively working on publishing the extension through the Chrome Web Store. Once it is published, we will update the documentation accordingly.
            </FacetBlockQuote>
            <br />
            After the installation, create and authenticate your user account. The facet extension is now ready for use.
            </FacetParagraph>
    </>
}