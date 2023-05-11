import Link from "next/link";
import Cta from "./components/Cta";
import { markdownify } from '../lib/utils/helpers'; // Update the path to point to the lib/utils/helpers.js file
import Image from "next/image";
import getConfig from 'next/config';
import { useTranslation } from "react-i18next";
import pricingDataEn from "@config/about.json";
import pricingDataEs from "@config/about.es.json";


const { publicRuntimeConfig } = getConfig();
const { assetPrefix } = publicRuntimeConfig;


function pricing() {

  // get the current language from react-i18next
  const { t, i18n } = useTranslation();

  // set the pricing data based on the current language
  const pricingData = i18n.language === "es" ? pricingDataEs : pricingDataEn;
  const title = pricingData.title;
  const feature = pricingData.feature;
  const call_to_action = pricingData.call_to_action;

  // Ensure feature is defined before rendering
  if (!feature) {
    return null;
  }

  return (
    <>
      <section className="section pb-0">
        <div className="container">
          <h1 className="text-center font-normal">{title}</h1>
          {/* Add the About description and other content here */}
          <div className="about-content" style={{ lineHeight: "1.6", marginBottom: "2rem" }}>
            {/* Other content */}
          </div>

          {/* Features */}
          <section className="section bg-theme-light">
            <div className="container">
              <div className="text-center">
                <h2>{feature.title}</h2>
              </div>
              <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
                {feature.features.map((item, i) => (
                  <div
                    className="feature-card rounded-xl bg-white p-5 pb-8 text-center"
                    key={`feature-${i}`}
                  >
                    {item.icon && (
                      <Image
                        className="mx-auto"
                        src={`${assetPrefix}${item.icon}`}
                        width={30}
                        height={30}
                        alt=""
                      />
                    )}
                    <div className="mt-4">
                      {markdownify(item.name, "h3", "h5")}
                      <p className="mt-3">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
      <Cta cta={call_to_action} />
    </>
  );
}


export default pricing;
