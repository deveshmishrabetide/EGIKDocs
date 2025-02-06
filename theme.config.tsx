import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { DocsThemeConfig } from "nextra-theme-docs";
import icon from "./images/favicon.ico";
import { Analytics } from "@vercel/analytics/react";
import Image from "next/image";

import edgegap from "./images/edgegap.png";

const config: DocsThemeConfig = {
  logo: (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
      }}
    >
      <Image src={edgegap} alt="edgegap" height={43} width={43} />
      <div style={{ fontWeight: 1000, marginTop: ".4en" }}>
        EdgeGap Integration Kit
      </div>
    </div>
  ),
  project: {
    link: "https://github.com/betidestudio/EdgegapIntegrationKit",
  },
  chat: {
    link: "https://discord.gg/betidestudio",
  },
  docsRepositoryBase: "https://github.com/betidestudio/EdgegapIntegrationKit",
  footer: {
    text: "Made with ❤️ by Betide Studio",
  },
  head: (
    <>
      <link rel="icon" type="image/x-icon" href={icon.src} />
    </>
  ),
  useNextSeoProps() {
    return { titleTemplate: "%s – Betide Studio" };
  },
};

export default config;
