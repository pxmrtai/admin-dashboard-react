import React from "react";

import PageContent from "@/components/page-content";
import PageHeader from "@/components/page-header";

const EcommercePage = () => (
  <>
    <PageHeader pageTitle="Ecommerce" />
    <PageContent innerScroll>
      <div className="card flex-1 overflow-visible bg-white dark:bg-neutral">
        <div className="card-body">
          <div className="min-h-[1000px]">
            The minimum height of the content on the Ecommerce page is 1000 pixels
          </div>
        </div>
      </div>
    </PageContent>
  </>
);

export default EcommercePage;
