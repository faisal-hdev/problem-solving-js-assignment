// Problem 04 : Make A Great Password
// ⚠️ Function Name Must be password()

// কলি মুদ্দি ন সাহে ব নতুন ফ োন কি নে বি ভি ন্ন ওয়ে বসাইটে ভি জি ট করে ন এবং বি ভি ন্ন এপ্লি কে শনে একাউন্ট ক্রি য়ে ট
// করে ন । কি ন্তু তি নি পাসওয়ার্ড মনে রাখতে পারে ন না । তি নি এমন একটি ফাংশন চান, যে খানে তার ইনফরমে শন
// এবং ওয়ে বসাইট নে ম দি লে সে টা কলি মুদ্দি ন সাহে ব কে একটি মনে রাখার মত ো পাসওয়ার্ড জে নারে ট করে দি তে
// পারবে ।
// তার জন্য password() নামে একটা ফাংশন লি খতে হবে ।

// Input :
// ফাংশন টি একটা object ইনপুট হি সে বে নি বে । যে খানে শুধুতি ন টি প্র োপার্টি থাকবে ।
// { name: “kolimuddin” , birthYear: 1999 , siteName: “google” }
// ⚠️ অব্জে ক্ট এ প্র োপার্টি গুল োর নাম একদম সে ইম হতে হবে ।
/*function signature/sample */
// function deleteInvalids(array) {

// You have to write your code here
// }

// Password-Structure :
// Website Name
// (প্রথম অক্ষর বড় হাতে র হবে )

// # ইউজার নে ম @ birthYear

// Output:
// ফাংশন টি উপরে র স্ট্রাকচার অনযু ায়ী একটা স্ট্রি ং আউটপুট আকারে রি টার্ন করবে ।
// Google#kolimuddin@1999

// Challenge 📢: যদি ক োন একটা প্র োপার্টি মি সি ং থাকে অথবা যদি birthYear 4 ডি জি টে র না হয় ফাংশন টি
// রি টার্ন করবে একটি স্ট্রি ং যার ভ্যালুহবে “invalid”।

function password(obj) {
  const { siteName, name, birthYear } = obj;
  if (siteName || name || birthYear || birthYear.toString().length !== 4) {
    return "invalid";
  }
  const siteFirstLetter = siteName.charAt(0).toUpperCase();
  const outPut =
    siteFirstLetter + siteName.slice(1) + "#" + name + "@" + birthYear;
  return outPut;
}

// console.log(password());
