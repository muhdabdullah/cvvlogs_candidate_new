<template>
  <v-container>
    <v-row class="mt-15">
      <v-col>
        <div class="text-center">
          <h1
            :class="`tw-font-black ${
              $vuetify.breakpoint.mobile ? 'tw-text-5xl' : 'tw-text-7xl'
            }`"
          >
            Privacy Policy
          </h1>
        </div>
        <div v-for="data in privacyData" :key="data">
          <h1
            :class="`tw-font-extrabold text-uppercase mt-10 ${
              $vuetify.breakpoint.mobile ? 'tw-text-3xl' : 'tw-text-4xl'
            }`"
          >
            {{ data?.heading }}
          </h1>
          <p
            :class="`tw-font-light content1 mt-n4 ${
              $vuetify.breakpoint.mobile ? 'tw-text-md' : 'tw-text-lg'
            }`"
          >
            {{ data?.text }}
          </p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
  
  <script>
export default {
  data() {
    return {
      privacyData: [
        {
          heading: "",
          text: "cvvlogs takes the privacy of its users very seriously. We strive to provide a safe, secure user experience. This Privacy Policy details the online data collection and usage policies and practices that apply to the cvvlogs website and mobile application does not apply to information we collect in any other form. The cvvlogs site contains links to other web sites over which we have no control. We are not responsible for the privacy policies or practices of other web sites to which you choose to link from our site. We encourage you to review the privacy policies of those sites so you can understand how they collect, use and share your information.",
        },
        {
          heading: "Usage and Information Collection by cvvlogs",
          text: `When you create profile by registering on our platform, we request the following personally identifiable information from you: your name, address, e-mail address, telephone number, physical address, and date of birth. We also collect demographic information that is not unique to you such as gender, interests and favorites.\n\nWe also gather information about our users' use of cvvlogs, such as what areas of the site you visit and what services you access. We collect your IP address, browser type, domain names, access times and referring Web site addresses. This information is logged to help diagnose technical problems, as well as administer the site in order to constantly improve the quality of our site and service to you. We may also track and analyze aggregate usage and volume statistics from our site to improve the services we offer on our site. None of this information is linked to your personally identifiable information.`,
        },
        {
          heading: "Our Use of your Information",
          text: `We use the information we gather on cvvlogs, whether personal, demographic, aggregate or technical, for the purpose of operating and improving the cvvlogs web site, creating a positive user experience, and delivering the tools and services that we offer.\n\nWe use your email information to send you notifications from our site that you elect to receive such as job alerts along with email newsletters. We send notification emails rarely such as to notify you of any technical issues or service related issues that may affect your access to the site. You generally cannot opt-out of these kinds of communications. You can opt out of receiving newsletters from our site by clicking unsubscribe link at the bottom. If you use a bulletin board or chat room on this website, you should be aware that any personally identifiable information you submit there can be read, collected or used by other users of these forums, and could be used to send you unsolicited messages. We are not responsible for the personally identifiable information you choose to submit in these forums. We obtain your explicit consent prior to posting your testimonial on our site.`,
        },
        {
          heading: "Disclosure of Personal Information to Third Parties",
          text: `We do not disclose your personally identifiable information to third parties for their promotional purposes.\n\nWe use third party service providers to administer some of our services to you on our site. We use third party service providers to administer payments and process your credit card information when you purchase our products & services. We also use a third party service provider to host our website as well as serve you with our newsletters via email. These service providers are not authorized to use your personally identifiable information for their promotional purposes.\n\nWe disclose information if legally required to do so, if requested to do so by a governmental entity or if we believe in good faith that such action is necessary to: (a) conform to legal requirements or comply with legal process such as in complying with a judicial proceeding, court order or subpoena; (b) protect our copyrights or property or our affiliated companies; (c) prevent a crime or protect national security; or (d) protect the personal safety of users or the public.\n\nIn the event of a sale or merger of our business, your information would be a part of the assets transferred. In addition, in the event we become the subject of a bankruptcy proceeding, whether voluntary or involuntary, we or our trustee in bankruptcy may sell, license or otherwise dispose of such information in a transaction approved by the bankruptcy court. In the event of any such circumstances, you will be notified via email or through a prominent notice posted on the cvvlogs Website.\n\nWe use a service provider to host our "Help" and "Contact Us" functions on the web site. While these functions take you to a third party web site the information collected here is governed by cvvlogs and our privacy practices.`,
        },
        {
          heading: "Personal Information on Resumes and Profiles",
          text: `We attempt to limit access to our searchable resume database (or copies thereof) only to registered employers, recruiters, hiring managers, headhunters, and human resource professionals.\n\nYou may remove your resume on cvvlogs or delete your profile on cvvlogs at any time, but, employers, recruiters and others who have access to resume database as well as parties who have otherwise gained access may have retained a copy of your resume in their own files or databases. We are not responsible for the retention, use or privacy of resumes or profiles in these instances.`,
        },
        {
          heading: "Posting to Public Areas of cvvlogs",
          text: `Please remember that if you post any of your personal information in public areas of cvvlogs such as the searchable resume database, such information may be collected and used by others over whom we have no control. We are not responsible for the use made by third parties of information you post or otherwise make available in public areas of cvvlogs.`,
        },
        {
          heading: "Use of Cookies",
          text: `We use "cookies" to help personalize and maximize your online experience. A cookie is a text file that is placed on your hard drive by a Web page server. Cookies are not used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to your computer, and can only be read by a Web server in the domain that issued the cookie to you.\n\nOne of the primary purposes of cookies is to save you time. The purpose of a cookie is to tell the Web server that you have returned to a specific page. For example, if you personalize cvvlogs pages, or register for services, a cookie helps us to recall your specific information (such as user name, password and preferences). Because of our use of cookies, we can deliver faster and more accurate results and a more personalized site experience. When you return to cvvlogs, the information you previously provided can be retrieved, so you can easily use the features that you customized.\n\nYou may have the ability to accept or decline cookies. Most Web browsers automatically accept cookies, but you can usually modify your browser setting to decline all cookies if you prefer. Alternatively, you may be able to modify your browser setting to notify you each time a cookie is tendered and permit you to accept or decline cookies on an individual basis. If you choose to decline cookies, however, that may hinder performance and negatively impact your experience on cvvlogs.`,
        },
        {
          heading: "Modification of Your Information",
          text: `You may review, correct, update or change your cvvlogs account profile at any time on your 'My Settings' page or by emailing our webmaster at'support@cvvlogs.com'or by calling customer support at 1 (866) 955-9001. These points of contact also allow you to edit your subscription to our newsletters and promotional emails. If you opted to receive job postings, commercial e-mails or other communications from cvvlogs or third parties at the time you created a cvvlogs account, but subsequently change your mind, you may opt-out by editing your cvvlogs Account Profile as described above. If you previously opted not to receive such communications, you may later optin by editing your cvvlogs Account Profile as well.\n\nWe retain indefinitely all the information we gather about you in an effort to make your repeat use of cvvlogs, practical, and relevant. Of course, you can delete your resume from cvvlogs online database and close your cvvlogs account at any time by informing us via our feedback form. In such an event we will remove all our copies of your resume from cvvlogs, your cvvlogs account information and remove your profile, except for an archival copy which is not accessible on the Internet.`,
        },
        {
          heading: "Security of the Profile Information",
          text: `We have implemented commercially reasonable technical and organizational measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration or disclosure. However, we cannot guarantee that unauthorized third parties will never be able to defeat those measures or use your personal information for improper purposes.`,
        },
        {
          heading: "Use of Material",
          text: `The contents of cvvlogs (the "Website" and ???Aps???) such as text, graphics, images, logos, button icons, software and other material are protected under USA and foreign copyright, trademark and other laws and are exclusive property of Scorpius Holding LLC. The brands and logos of different advertisers are property of respective companies. The collection, compilation, arrangement and assembly of all content on this Website is the exclusive property of Scorpius Holding LLC and is protected by state of Florida and international copyright laws. You may not sell or modify the content on the Website or reproduce, display, publicly perform, distribute, or otherwise use its material in any way for any public or commercial purpose. The use of the content on any other Web Site or in a networked computer environment for any purpose is prohibited.`,
        },
        {
          heading: "Children's use of cvvlogs",
          text: `The cvvlogs web site is not intended for children under 15 years of age. We do not knowingly collect personal information from children under 15.`,
        },
        {
          heading: "Privacy Policy Modifications",
          text: `If we decide to materially change our Privacy Policy for cvvlogs, we will post those changes through a prominent notice on the web site 30 days prior to the change taking place so that you will always know what information we gather, how we might use that information, and to whom we will disclose it.\n\nIf at any time, you have questions or concerns about this Privacy Policy or believe that we have not adhered to this Privacy Policy, please feel free to use our feedback form. We will use commercially reasonable efforts to promptly answer your question or resolve your problem.`,
        },
        {
          heading: "Contact Information",
          text: `cvvlogs is the name under which Scorpius Holding LLC., a Florida based corporation with its principal place of business at 200 Booth Rd. Suite A Ormond Beach, FL 32174 and certain of its affiliated companies worldwide, do business. Scorpius Holding LLC. is the legal entity which determines the purposes and means of processing the information gathered at www.cvvlogs.com. You can also contact us at support@cvvlogs.com.`,
        },
        {
          heading: "Billing & Refund Policy",
          text: `cvvlogs charges a fee to both the recruiter and the candidate. The fees charged to Candidates for progress tracking on job applied shall be paid monthly and automatically charged to the Candidate debit or credit card. Recruiters on the other hand are charged a one-time fee to shortlist, message and communicate with a candidate.\nPayment made by Recruiters are refundable only if the Candidate shortlisted by the Recruiter is unavailable. Recruiters are advised to contact us within 48 hours via support@cvvlogs.com to claim refund.\nAll sales are final and refunds are solely at the discretion of cvvlogs. In the event that the Client makes an error in any payment(s) to cvvlogs or any payment is provided to cvvlogs in excess of the amount payable or due by the Client, cvvlogs may at its sole discretion:\n-Adjust the amount against future payments payable by the Client to cvvlogs; or\n-Provide a refund to the Client after deduction of applicable 10% refund processing fee(s).\n\nFor further details regarding refunds, please email with details at: refunds@cvvlogs.com\n\n`,
        },
      ],
    };
  },
};
</script>
  
  <style lang="scss">
.content1 {
  white-space: pre-line;
}
</style>
  