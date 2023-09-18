// src/components/TermsAndConditions.js
import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-full md:w-2/3 lg:w-1/2">
        <h1 className="text-2xl font-bold mb-4">Terms and Conditions</h1>
        <p className="mb-4">
          By using our services, you agree to abide by the following terms and
          conditions:
        </p>
        <ol className="list-decimal pl-6">
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>
            Nulla vel odio ac urna pulvinar feugiat. Vivamus bibendum aliquam
            mi, sed scelerisque velit.
          </li>
          <li>
            Fusce nec tellus at mauris convallis viverra. Sed euismod
            sollicitudin justo, nec scelerisque sapien consectetur nec.
          </li>
          <li>
            Quisque tincidunt mi eget risus eleifend, id lacinia quam aliquam.
          </li>
        </ol>
        <p className="mt-4">
          Please read these terms and conditions carefully before using our
          services. If you do not agree to these terms, please do not use our
          services.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
