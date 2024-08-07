import React from "react";

const Features = () => {
  interface FeaturesData {
    label: string;
    details: string;
  }
  const featuresData: FeaturesData[] = [
    {
      label: "Easy Upload",
      details: "Streamlined process for quick and hassle-free uploads.",
    },
    {
        label: "Unlimited Bandwidth",
        details: "No limits on the amount of data you can upload or share.",
    },
    {
        label: "Secure Sharing",
        details: "Protect your files with end-to-end encryption and password protection.",
    },
    {
        label:"Unlimited File Storage",
        details: "Store as many files as you need, without worrying about space limitations.",
    },
    {
        label: "Link Converter & Shortener",
        details: "Convert and shorten links to make sharing easier and more efficient.",
    },
    {
        label: "File Versioning",
        details: "Keep track of changes and revisions with our automatic file versioning feature.",
    },
    {
        label:"Magical CPM Rate",
        details: "Get paid for every click on your links, with our competitive CPM rates that adjust based on your views.",
    },
    {
        label: "24/7 Support",
        details: "Get help whenever you need it, with our dedicated support team available around the clock"
    },
    {
        label: "Referral System",
        details: "Earn money by referring friends and family to our platform, with a generous referral program"
    },
    {
        label: "3-level referral program",
        details: "Get paid for every level of referrals, with a 3-level referral program that (4%, 2%, 1%)."
    },
    {
        label: "Withdrawal System",
        details: "Withdraw your earnings easily and quickly, with our fast and secure withdrawal system."
    },
    {
        label: "Withdrawal Threshold",
        details: "Withdraw your earnings when you reach the threshold of $10."
    },
    {
        label: "Withdrawal Methods",
        details: "Withdraw your earnings via PayPal, Bank Transfer, or other methods."
    },
    {
        label: "Track Earnings",
        details: "Track your earnings in real-time, with our easy-to-use dashboard."
    },
    {
        label: "Share & Manage",
        details: "Share files and manage your links with ease, using our intuitive interface."
    }
  ];
  return (
    <section id="features" className="py-20 px-8">
      <div className="container mx-auto text-center w-auto">
        <h2 className="text-3xl font-bold mb-16">Why Choose BharatDisk?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => {
             let ccm = 'animate-slideLeft';
            //  if (index % 3 === 0) {
            //     ccm = 'animate-slideLeft';  // For indices 0, 3, 6, 9, ...
            //  } else if ((index - 1) % 3 === 0) {
            //     ccm = 'animate-slideBottom'; // For indices 1, 4, 7, 10, ...
            //  } else if ((index - 2) % 3 === 0) {
            //     ccm = 'animate-slideRight'; // For indices 2, 5, 8, 11, ...
            //  }
            return (<div
              key={index}
              className={`${ccm} bg-white border p-6 rounded-lg shadow-lg bg-gradient-to-r from-gray-700 via-blue-950 to-gray-700`}
            >
              <h3 className="text-xl font-semibold mb-4">{feature.label}</h3>
              <p>{feature.details}</p>
            </div>);
})}
        </div>
      </div>
    </section>
  );
};

export default Features;
