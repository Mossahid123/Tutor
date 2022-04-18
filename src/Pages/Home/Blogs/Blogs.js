import React from 'react';

const Blogs = () => {
    return (
        <div className='d-flex m-5' id='blogs'>
                <div className='border border-2 text-center p-5'>
                    <h1>প্রথম প্রশ্ন</h1>
                    <h4>Authentication এবং Authorization  এর পার্থক্য </h4>
                    <h4>Authentication:</h4>
                    <p>সহজ ভাষায় বলতে গেলে অথেনটিকেশন হল, ইউজারকে  যাচাই করে ।
                        পাসওয়ার্ড পিন, ওয়ান-টাইম পিন, , বায়োমেট্রিক তথ্য এবং ব্যবহারকারীর দ্বারা প্রদত্ত অন্যান্য তথ্যের মাধ্যমে অথেন্টিকেশন কাজ করে ।<br />
                        <h4>Authorization</h4>
                        আর অথরিজাশন হল ব্যবহারকারীর কোন নির্দিষ্ট অ্যাপ্লিকেশন, প্রোফাইল এবং ডাটাতে কি কি এক্সেস রয়েছে তা যাচাই করে ।
                        অথরিজাশন সেই সেটিংসের মাধ্যমে কাজ করে যা সংস্থার দ্বারা বাস্তবায়িত এবং রক্ষণাবেক্ষণ করা হয়।
                    </p>
                </div>
                <div className='border border-2 text-center p-5'>
                    <h1>দ্বিতীয় প্রশ্ন</h1>
                    <h4>কেন Firebase ইউজ করব?</h4>
                    <p>
                        কারণ অথেন্টিকেশন এর জন্য অন্যান্য যত এপ্লিকেশন আছে সেগুলোর তুলনায় ফায়ারবেজ সিকিউর এবং ইউজার ফ্রেন্ডলি অনেক প্রশিদ্ধ এবং ফায়ারবেজ ব্যবহার করে অতি সহজেই অথেন্টিকেশন এবং লাইভ হোস্টিং করা যায়, যেটা আগেই বলেছি ইউজার ফ্রেন্ডলি তাই  অধিকাংশ মানুষ ফায়ারবেজ ইউজ করে ।<br />
                        <h4>Firebase এর alternatives : </h4>
                        1.OneLogin,
                        2.JumpCloud,
                        3.Microsoft Azure Active Directory,
                        4.CyberArk Identity (formerly Idaptive),
                        5.Auth0,
                        6.Rippling,
                        7.SecureAuth Identity Platform,
                        8.ForgeRock.
                    </p>
                </div>
            </div>
    );
};

export default Blogs;