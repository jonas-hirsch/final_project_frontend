import React from "react";

const LegalContent = () => {
  return (
    <div className="pt-2 pb-2 w-full max-w-lg mx-auto font-light">
      <div className="flex text-2xl font-semibold justify-center">
        <h1>JBM Privacy Policy</h1>
      </div>
      <div>
        <p className="pt-2 pb-2 font-normal">
          This Privacy Policy describes how your personal information is
          collected, used, and shared when you visit
          ecommerce-showcase-project.netlify.app (the “Site”). This Site is not
          for real purchase. Its for demonstration purpose! No Money will be
          accepted and no products will be shipped out.
        </p>
        <div className="pt-2 pb-2 font-normal">
          <h4>PERSONAL INFORMATION WE COLLECT</h4>
        </div>
        <div className="pt-2 pb-2">
          <p>
            When you visit the Site, we automatically collect certain
            information about your device, including information about your web
            browser, IP address, time zone, and some of the cookies that are
            installed on your device. Additionally, as you browse the Site, we
            collect information about the individual web pages or products that
            you view, what websites or search terms referred you to the Site,
            and information about how you interact with the Site. We refer to
            this automatically-collected information as “Device Information.”
          </p>
        </div>
        <div className="pt-2 pb-2">
          <p>We collect Device Information using the following technologies:</p>
          <p>
            {" "}
            - “Cookies” are data files that are placed on your device or
            computer and often include an anonymous unique identifier. For more
            information about cookies, and how to disable cookies, visit
            http://www.allaboutcookies.org. - “Log files” track actions
            occurring on the Site, and collect data including your IP address,
            browser type, Internet service provider, referring/exit pages, and
            date/time stamps. - “Web beacons,” “tags,” and “pixels” are
            electronic files used to record information about how you browse the
            Site. [[INSERT DESCRIPTIONS OF OTHER TYPES OF TRACKING TECHNOLOGIES
            USED]]Additionally when you make a purchase or attempt to make a
            purchase through the Site, we collect certain information from you,
            including your name, billing address, shipping address, payment
            information (including credit card numbers [[INSERT ANY OTHER
            PAYMENT TYPES ACCEPTED]]), email address, and phone number. We refer
            to this information as “Order Information.”
          </p>
        </div>
        <div className="pt-2 pb-2">
          <p>
            [[INSERT ANY OTHER INFORMATION YOU COLLECT: OFFLINE DATA, PURCHASED
            MARKETING DATA/LISTS]]
          </p>
          <p>
            When we talk about “Personal Information” in this Privacy Policy, we
            are talking both about Device Information and Order Information.
          </p>
        </div>
        <div className="pt-2 pb-2 font-normal">
          <h4>HOW DO WE USE YOUR PERSONAL INFORMATION?</h4>
        </div>
        <div className="pt-2 pb-2">
          <p>
            {" "}
            use the Order Information that we collect generally to fulfill any
            orders placed through the Site (including processing your payment
            information, arranging for shipping, and providing you with invoices
            and/or order confirmations). Additionally, we use this Order
            Information to: Communicate with you;Screen our orders for potential
            risk or fraud; and When in line with the preferences you have shared
            with us, provide you with information or advertising relating to our
            products or services. [[INSERT OTHER USES OF ORDER INFORMATION]] We
            use the Device Information that we collect to help us screen for
            potential risk and fraud (in particular, your IP address), and more
            generally to improve and We optimize our Site (for example, by
            generating analytics about how our customers browse and interact
            with the Site, and to assess the success of our marketing and
            advertising campaigns). [[INSERT OTHER USES OF DEVICE INFORMATION,
            INCLUDING: ADVERTISING/RETARGETING]]SHARING YOUR PERSONAL
            INFORMATION
          </p>
        </div>
        <div className="pt-2 pb-2">
          <p>
            We share your Personal Information with no parties to because this
            is a Showcase E.commerce store, as described above. more about how
            Google uses your Personal Information here:
            https://www.google.com/intl/en/policies/privacy/. You can also
            opt-out of Google Analytics here:
            https://tools.google.com/dlpage/gaoptout.
          </p>
          <p>
            Finally, we may also share your Personal Information to comply with
            applicable laws and regulations, to respond to a subpoena, search
            warrant or other lawful request for information we receive, or to
            otherwise protect our rights.[[INCLUDE IF USING REMARKETING OR
            TARGETED ADVERTISING]] BEHAVIOURAL ADVERTISING As described above,
            we use your Personal Information to provide you with targeted
            advertisements or marketing communications we believe may be of
            interest to you. For more information about how targeted advertising
            works, you can visit the Network Advertising Initiative’s (“NAI”)
            educational page at
            http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.
          </p>
        </div>
        <div className="pt-2 pb-2 font-normal">
          <h4>CHANGES</h4>
        </div>
        <div className="pt-2 pb-2">
          <p>
            We may update this privacy policy from time to time in order to
            reflect, for example, changes to our practices or for other
            operational, legal or regulatory reasons.CONTACT US For more
            information about our privacy practices, if you have questions, or
            if you would like to make a complaint, please contact us by e-mail
            at jonashirsch@t-online.de or by mail using the details provided
            below: Landsberger Straße 357, München, BY, 80687, Germany
          </p>
        </div>
      </div>
    </div>
  );
};

export default LegalContent;
