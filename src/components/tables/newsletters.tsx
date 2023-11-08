import React, { useState } from "react";
import newsletter from "../../json/newsletter.json";

//test update

const NewslettersTable = () => {
  const [data, setData] = useState(newsletter);

  const handleSubscribe = (id: number) => {
    const newData = data.map((item) => {
      if (item.id === id) {
        item.subscriptionStatus = !item.subscriptionStatus;
      }
      return item;
    });
    setData(newData);
  };

  const handleSearch = (val: string) => {
    const newData = newsletter.filter(
      (item) =>
        item.name.toLowerCase().includes(val.toLowerCase()) ||
        item.description.toLowerCase().includes(val.toLowerCase())
    );
    setData(newData);
  };

  return (
    <>
      <div className="navbar bg-base-100 rounded-md">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Newsletters</a>
        </div>
        <div className="flex-none gap-2 lg:mr-5">
          <div className="form-control">
            <input
              onChange={(e) => handleSearch(e.target.value)}
              type="text"
              placeholder="Search"
              className="input input-bordered input-sm w-24 md:w-auto"
            />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto w-[92vw] lg:w-full">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Description</th>
              <th>Subscription Status</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr className="hover">
                <th>{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>
                  {item.subscriptionStatus ? "Subscribed" : "Not Subscribed"}
                </td>
                <td className="text-center">
                  {!item.subscriptionStatus ? (
                    <button
                      onClick={() => handleSubscribe(item.id)}
                      className="btn btn-sm btn-primary"
                    >
                      Subscribe
                    </button>
                  ) : (
                    <button
                      onClick={() => handleSubscribe(item.id)}
                      className="btn btn-sm btn-warning"
                    >
                      Unsubscribe
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default NewslettersTable;
