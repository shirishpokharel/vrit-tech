import { useState } from "react";
import "./App.css";
import { socialImageData } from "./lib";

function App() {
  const [toggle, setToggle] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredData, setfilteredData] = useState(socialImageData);
  const handleToggle = () => {
    setToggle(!toggle);
    handleModal();
  };

  const handleModal = () => {
    const dialog = document.querySelector("dialog");

    dialog.showModal();
  };

  const handleCloseModal = () => {
    const dialog = document.querySelector("dialog");
    setSearch("");

    dialog.close();
  };

  const handleSearchData = (value) => {
    const arr = socialImageData?.filter((item) => item?.name?.includes(value));
    setfilteredData(arr);
  };

  const handleSelect = (index, checked) => {
    let arr = [...filteredData];
    let arrNew = arr?.map((item, i) => {
      if (index === item?.index) {
        return {
          ...item,
          checked: checked,
        };
      } else {
        return {
          ...item,
          checked: false,
        };
      }
    });
    setfilteredData(arrNew);
  };
  const handleAddSelectedLinks = () => {
    setSearch("");

    let arr = filteredData?.map((item) => {
      if (item?.checked) {
        return {
          ...item,
          added: true,
        };
      }
      return item;
    });
    setfilteredData(arr);
    handleCloseModal();
  };

  const addedLinks = filteredData?.filter((item) => item?.added);

  const handleDeleteItem = (index) => {
    const arr = filteredData?.map((item) => {
      if (index === item?.index) {
        return {
          ...item,
          added: false,
          checked: false,
          link: socialImageData?.[index]?.link,
        };
      }
      return item;
    });
    setfilteredData(arr);
  };

  const handleLinkUpdate = (index, value) => {
    const arr = filteredData?.map((item) => {
      if (index === item?.index) {
        return {
          ...item,
          link: value,
        };
      }
      return item;
    });
    setfilteredData(arr);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="card p-5">
            <div
              className="addSocialMedia mb-4 cursor-pointer"
              onClick={handleToggle}
            >
              <i className="ri-add-circle-fill"></i>Add Social Media
            </div>
            {addedLinks?.length > 0 ? (
              addedLinks?.map((social, index) => {
                return (
                  <div className="social__links mb-3" key={index}>
                    <div className="social__image w-25">
                      <img
                        src={social?.icon}
                        alt="instagram"
                        className="icon"
                      />
                      <span>{social?.name}</span>
                    </div>
                    <div className="social__link ">
                      <input
                        type="text"
                        className="border-0 social__input"
                        value={social?.link}
                        onChange={(e) => {
                          const value = e.target.value;
                          handleLinkUpdate(social?.index, value);
                        }}
                      />
                    </div>
                    <div
                      className="delete__button ms-2"
                      onClick={() => {
                        handleDeleteItem(social?.index);
                      }}
                    >
                      <i className="ri-delete-bin-6-line red delete_icon"></i>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="mb-3">No social link added.</div>
            )}
            <div className="text-end">
              <button className="socialButton ">Submit</button>
            </div>
          </div>
        </div>
      </div>

      <dialog>
        <div className="dialogContainer">
          <div className="dialog__header position-relative">
            <span className="">
              <b> Add Social Media</b>
            </span>
            <i
              className="ri-close-line close__icon cursor-pointer"
              onClick={handleCloseModal}
            ></i>
          </div>
          <div className="dialog__input position-relative">
            <input
              type="text"
              placeholder="Search..."
              className="ps-5 w-100"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                handleSearchData(e.target.value);
              }}
            />
            <i className="ri-search-line search__icon"></i>
          </div>
          <div className="icons__container">
            <div className="icons_container_inner my-2">
              {filteredData?.length > 0 ? (
                filteredData?.map((item) => {
                  return (
                    <div key={item?.index} className="icon__self">
                      <label>
                        <input
                          type="radio"
                          name="test"
                          value="small"
                          checked={item?.checked}
                          onChange={(e) => {
                            handleSelect(item?.index, e.target.checked);
                          }}
                        />
                        <img src={item?.icon} />
                      </label>
                    </div>
                  );
                })
              ) : (
                <span>No social icon available.</span>
              )}
            </div>
          </div>
        </div>
        <button
          className="btn btn-primary w-100 my-3"
          type={"button"}
          onClick={handleAddSelectedLinks}
        >
          Add
        </button>
      </dialog>
    </div>
  );
}

export default App;
