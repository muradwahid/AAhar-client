import React from 'react';

const Blog = () => {
    return (
      <div className="w-4/5 mx-auto my-12">
        <div className="w-4/5 mx-auto border border-red-300 p-3 rounded-lg mb-4">
          <h2 className="text-3xl font-semibold text-gray-600 underline mb-3">
            Difference between sql and nosql?
          </h2>
          <p className="text-gray-600">
            SQL is the programming language used to interface with relational
            databases. (Relational databases model data as records in rows and
            tables with logical links between them). NoSQL is a class of DBMs
            that are non-relational and generally do not use SQL.
          </p>
        </div>
        <div className="w-4/5 mx-auto border border-red-300 p-3 rounded-lg mb-4">
          <h2 className="text-3xl font-semibold text-gray-600 underline mb-3">
            What is jwt, and how does it work?
          </h2>
          <p className="text-gray-600">
            What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open
            standard (RFC 7519) for securely transmitting information between
            parties as JSON object. It is compact, readable and digitally signed
            using a private key/ or a public key pair by the Identity
            Provider(IdP)
          </p>
        </div>
        <div className="w-4/5 mx-auto border border-red-300 p-3 rounded-lg mb-4">
          <h2 className="text-3xl font-semibold text-gray-600 underline mb-3">
            What is the difference between javaScript and nodeJs?
          </h2>
          <p className="text-gray-600">
            JavaScript is a simple programming language that can be used with
            any browser that has the JavaScript Engine installed. Node. js, on
            the other hand, is an interpreter or execution environment for the
            JavaScript programming language
          </p>
        </div>
        <div className="w-4/5 mx-auto border border-red-300 p-3 rounded-lg mb-4">
          <h2 className="text-3xl font-semibold text-gray-600 underline mb-3">
            How does nodeJs handle multiple requests at the same time?
          </h2>
          <p className="text-gray-600">
            How NodeJS handle multiple client requests? NodeJS receives multiple
            client requests and places them into EventQueue. NodeJS is built
            with the concept of event-driven architecture. NodeJS has its own
            EventLoop which is an infinite loop that receives requests and
            processes them
          </p>
        </div>
      </div>
    );
};

export default Blog;