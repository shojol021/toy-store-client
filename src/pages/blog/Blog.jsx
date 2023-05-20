import useTitle from "../../hooks/pageTitle";

const Blog = () => {
  useTitle("Blog")
  
  return (
    <div className="bg-gray-100 min-h-screen px-12">
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold mb-8">Blog</h1>

        <div className="bg-white p-6 rounded shadow-lg  mb-8">
          <h2 className="text-xl font-semibold mb-4">What is an access token and refresh token?</h2>
          <p className="text-gray-700">
            An access token is a credential used to authenticate and authorize a user when making requests to protected
            resources or APIs. It contains information about the user and their permissions. Access tokens are usually
            short-lived and are sent along with each request to the server to prove the users identity and permissions.
          </p>
          <p className="text-gray-700 mt-4">
            On the other hand, a refresh token is a long-lived credential that is used to obtain new access tokens when
            they expire. Refresh tokens should be securely stored on the client-side, often in an HTTP-only cookie or
            secure storage, as they can be used to obtain new access tokens.
          </p>
        </div>

        <div className="bg-white p-6 rounded shadow-lg  mb-8">
          <h2 className="text-xl font-semibold mb-4">Compare SQL and NoSQL databases</h2>
          <p className="text-gray-700">
            SQL (Structured Query Language) databases are relational databases that store data in tables with predefined
            schemas. They use SQL for querying and manipulating data, and they ensure data integrity through
            relationships.
          </p>
          <p className="text-gray-700 mt-4">
            NoSQL (Not Only SQL) databases, on the other hand, are non-relational databases that provide flexible schema
            designs. They are typically used for handling large amounts of unstructured or semi-structured data. NoSQL
            databases use various data models, such as key-value, document, columnar, or graph, and they offer horizontal
            scalability and high performance.
          </p>
        </div>

        <div className="bg-white p-6 rounded shadow-lg  mb-8">
          <h2 className="text-xl font-semibold mb-4">What is Express.js? What is Nest.js?</h2>
          <p className="text-gray-700">
            Express.js is a popular web application framework for Node.js. It provides a simple and minimalistic
            approach to building web servers and APIs. Express.js allows developers to handle routes, middleware, and
            HTTP requests easily.
          </p>
          <p className="text-gray-700 mt-4">
            Nest.js is a progressive Node.js framework for building efficient and scalable server-side applications.
            It is built on top of Express.js and provides an opinionated structure for organizing code and promoting
            architectural patterns like MVC (Model-View-Controller). Nest.js offers features such as dependency injection,
            modules, decorators, and a powerful CLI (Command Line Interface).
          </p>
        </div>

        <div className="bg-white p-6 rounded shadow-lg  mb-8">
          <h2 className="text-xl font-semibold mb-4">What is MongoDB aggregate and how does it work?</h2>
          <p className="text-gray-700">
            MongoDB aggregate is a powerful feature that allows for advanced data aggregation and analysis in MongoDB.
            It provides a way to process and transform data using a pipeline of stages. Each stage in the pipeline performs
            specific operations, such as filtering, grouping, projecting, sorting, and calculating aggregations on the data.
          </p>
          <p className="text-gray-700 mt-4">
            The aggregate pipeline consists of multiple stages, where the output of one stage becomes the input for the next
            stage. Each stage can modify, filter, or aggregate the data as per the requirements. It supports various operators
            and expressions to perform complex operations on the data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
