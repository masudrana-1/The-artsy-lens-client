import React from 'react';
import useTitle from '../../hook/useTitle';

const Blogs = () => {

    useTitle('Blogs')

    return (

        <div>
            <div className='bg-slate-100 rounded-lg shadow-2xl p-10 my-10 text-center'>
                <div>
                    <h1 className="text-5xl font-bold text-orange-500">Difference between SQL and NoSQL</h1>
                    <p className="py-6">SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
                </div>
                <div>
                    <div>
                        <label htmlFor="my-modal-3" className="btn btn-error">See full details</label>

                        {/* Put this part before </body> tag */}
                        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box relative">
                                <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                <h3 className="text-lg font-bold">Prerequisites – SQL, NoSQL</h3>
                                <p className="py-4">
                                    When it comes to choosing a database the biggest decisions is picking a relational (SQL) or non-relational (NoSQL) data structure. While both the databases are viable options still there are certain key differences between the two that users must keep in mind when making a decision.
                                    <br />

                                    The Main Differences:
                                    <br />

                                    Type –
                                    SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database. <br />
                                    Language –
                                    SQL databases defines and manipulates data based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice especially for great complex queries. But from other side it can be restrictive. SQL requires you to use predefined schemas to determine the structure of your data before you work with it. Also all of your data must follow the same structure. This can require significant up-front preparation which means that a change in the structure would be both difficult and disruptive to your whole system.
                                    A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store. This flexibility means that documents can be created without having defined structure first. Also each document can have its own unique structure. The syntax varies from database to database, and you can add fields as you go.

                                    <br />

                                    Scalability –
                                    In almost all situations SQL databases are vertically scalable. This means that you can increase the load on a single server by increasing things like RAM, CPU or SSD. But on the other hand NoSQL databases are horizontally scalable. This means that you handle more traffic by sharding, or adding more servers in your NoSQL database. It is similar to adding more floors to the same building versus adding more buildings to the neighborhood. Thus NoSQL can ultimately become larger and more powerful, making these databases the preferred choice for large or ever-changing data sets.


                                    Structure –
                                    SQL databases are table-based on the other hand NoSQL databases are either key-value pairs, document-based, graph databases or wide-column stores. This makes relational SQL databases a better option for applications that require multi-row transactions such as an accounting system or for legacy systems that were built for a relational structure.


                                    Property followed –
                                    SQL databases follow ACID properties (Atomicity, Consistency, Isolation and Durability) whereas the NoSQL database follows the Brewers CAP theorem (Consistency, Availability and Partition tolerance).


                                    Support –
                                    Great support is available for all SQL database from their vendors. Also a lot of independent consultations are there who can help you with SQL database for a very large scale deployments but for some NoSQL database you still have to rely on community support and only limited outside experts are available for setting up and deploying your large scale NoSQL deployments.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-slate-100 rounded-lg shadow-2xl p-10 my-10 text-center'>
                <div>
                    <h1 className="text-5xl font-bold text-orange-500">What is JWT, and how does it work?</h1>
                    <p className="py-6">JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.</p>
                </div>
                <div>
                    <div>
                        {/* The button to open modal */}
                        <label htmlFor="my-modal-6" className="btn btn-error">See full details</label>

                        {/* Put this part before </body> tag */}
                        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                        <div className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">JSON Web Token (JWT)</h3>
                                <p className="py-4">is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.

                                    Although JWTs can be encrypted to also provide secrecy between parties, we will focus on signed tokens. Signed tokens can verify the integrity of the claims contained within it, while encrypted tokens hide those claims from other parties. When tokens are signed using public/private key pairs, the signature also certifies that only the party holding the private key is the one that signed it.</p>
                                <div className="modal-action">
                                    <label htmlFor="my-modal-6" className="btn btn-error">Okay</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-slate-100 rounded-lg shadow-2xl p-10 my-10 text-center'>
                <div>
                    <h1 className="text-5xl font-bold text-orange-500">What is the difference between javascript and NodeJS?</h1>
                    <p className="py-6">JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
                </div>
                <div>
                    <div>
                        {/* The button to open modal */}
                        <label htmlFor="my-modal-6" className="btn btn-error">See full details</label>

                        {/* Put this part before </body> tag */}
                        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                        <div className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">Difference between Node.JS and Javascript</h3>
                                <p className="py-4">1. NodeJS :
                                    NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.

                                    2. JavaScript :
                                    Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. </p>
                                <div className="modal-action">
                                    <label htmlFor="my-modal-6" className="btn btn-error">Okay</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-slate-100 rounded-lg shadow-2xl p-10 my-10 text-center'>
                <div>
                    <h1 className="text-5xl font-bold text-orange-500">How does NodeJS handle multiple requests at the same time?</h1>
                    <p className="py-6">NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
                </div>
                <div>
                    <div>
                        {/* The button to open modal */}
                        <label htmlFor="my-modal-6" className="btn btn-error">See full details</label>

                        {/* Put this part before </body> tag */}
                        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                        <div className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">NodeJS</h3>
                                <p className="py-4">receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.

                                    If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.

                                    How to scale your NodeJS application with Cluster Module?

                                    A single instance of Node.js runs in a single thread. If you have a multi-core system then you can utilize every core. Sometimes developer wants to launch a cluster of NodeJS process to take advantage of the multi-core system.</p>
                                <div className="modal-action">
                                    <label htmlFor="my-modal-6" className="btn btn-error">Okay</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;