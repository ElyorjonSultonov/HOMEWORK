  // const data1 = [
  //   {
  //     value: "HTML",
  //     label: "HTML",
  //   },
  //   {
  //     value: "CSS",
  //     label: "CSS",
  //   },
  //   {
  //     value: 3,
  //     label: "BOOTSTRAP",
  //   },
  //   {
  //     value: 3,
  //     label: "JAVASCRIPT",
  //   },
  //   {
  //     value: 3,
  //     label: "JQUERY",
  //   },
  //   {
  //     value: 3,
  //     label: "REACT",
  //   },
  // ];
  // // backend
  // const data2 = [
  //   {
  //     value: 1,
  //     label: "DJONGO",
  //   },
  //   {
  //     value: 2,
  //     label: "fuchsia rose",
  //   },
  //   {
  //     value: 3,
  //     label: "true red",
  //   },
  // ];
  // // mobile
  // const data3 = [
  //   {
  //     value: 1,
  //     label: "cerulean",
  //   },
  //   {
  //     value: 2,
  //     label: "fuchsia rose",
  //   },
  //   {
  //     value: 3,
  //     label: "true red",
  //   },
  // ];

  // const [selectedOption1, setSelectedOption1] = useState();
  // const [selectedOption2, setSelectedOption2] = useState();
  // const [selectedOption3, setSelectedOption3] = useState();

  // console.log(selectedOption1);
  // // handle onChange event of the dropdown
  // const handleChange1 = (e) => {
  //   setSelectedOption1(e.target.value);
  //   localStorage.setItem("homework", e.target.value);
  // };
  // const handleChange2 = (e) => {
  //   setSelectedOption2(e);
  //   localStorage.setItem("homework", e.target.value);
  // };
  // const handleChange3 = (e) => {
  //   setSelectedOption3(e);
  //   localStorage.setItem("homework", e.target.value);
  // };

  // useEffect(() => {
  //   localStorage.setItem("homework", selectedOption1);
  // }, [selectedOption1]);
 
 <div className="dropD">
              <Select
                placeholder="FRONTEND"
                value={selectedOption1} // set selected value
                options={data1} // set list of the data
                onChange={(e) => handleChange1(e)} // assign onChange function
              />
              {/* {selectedOption && (
                <div style={{ marginTop: 20, lineHeight: "25px" }}>
                  <b>Selected Option</b>
                  <br />
                  <div style={{ marginTop: 10 }}>
                    <b>Label: </b> {selectedOption.label}
                  </div>
                  <div>
                    <b>Value: </b> {selectedOption.value}
                  </div>
                </div>
              )} */}
            </div>
            <div className="dropD">
              <Select
                placeholder="BACKEND"
                value={selectedOption2} // set selected value
                options={data2} // set list of the data
                onChange={handleChange2} // assign onChange function
              />
              {/* {selectedOption && (
                <div style={{ marginTop: 20, lineHeight: "25px" }}>
                  <b>Selected Option</b>
                  <br />
                  <div style={{ marginTop: 10 }}>
                    <b>Label: </b> {selectedOption.label}
                  </div>
                  <div>
                    <b>Value: </b> {selectedOption.value}
                  </div>
                </div>
              )} */}
            </div>
            <div className="dropD">
              <Select
                placeholder="MOBILE"
                value={selectedOption3} 
                options={data3} 
                onChange={handleChange3} 
              />
              
            </div>