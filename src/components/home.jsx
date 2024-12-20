import React from "react";
import { Link, Outlet } from "react-router-dom";
import JSConfetti from "js-confetti";
import "./Home.css";
// import { ThemeContext } from "../App";

function Home() {
  const [showForm, setShowForm] = React.useState(false);
  const [inputValue1, setInputValue1] = React.useState(""); // Name
  const [inputValue2, setInputValue2] = React.useState(""); // email
  const [inputValue3, setInputValue3] = React.useState(""); // Blog Title
  const [inputValue4, setInputValue4] = React.useState(""); // Blog Content
  const [inputValue5, setInputValue5] = React.useState(""); // Conclusion
  const [inputValue6, setInputValue6] = React.useState(""); // Date
  const [inputValue7, setInputValue7] = React.useState(""); // Time
  const [inputValue8, setInputValue8] = React.useState(null); // Image file
  const [blog, setBlog] = React.useState([]); // Blog list
  const [imagePreview, setImagePreview] = React.useState(""); // Image preview URL
  // const theme = React.useContext(ThemeContext);
  // const className = "home-" + theme;

  // Load blogs from localStorage on mount
  React.useEffect(() => {
    const savedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    setBlog(savedBlogs);
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setInputValue8(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // Set preview image URL
      };
      reader.readAsDataURL(file); // Convert image to Base64
    } else {
      setImagePreview("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !inputValue1 ||
      !inputValue2 ||
      !inputValue3 ||
      !inputValue4 ||
      !inputValue5 ||
      !inputValue6 ||
      !inputValue7 ||
      !imagePreview
    ) {
      alert("Please fill out all fields!");
      return;
    }

    const newBlog = {
      name: inputValue1,
      age: inputValue2,
      title: inputValue3,
      content: inputValue4,
      conclusion: inputValue5,
      date: inputValue6,
      time: inputValue7,
      image: imagePreview, // Save Base64 string
    };

    const updatedBlogs = [...blog, newBlog];
    setBlog(updatedBlogs); // Update state
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs)); // Save to localStorage
    clearForm(); // Clear the form
    setShowForm(false); // Hide the form

    
    
    new JSConfetti().addConfetti({
      confettiColors: ["#ff0000", "#00ff00", "#0000ff"],
      // emojis: ["🎉", "✨", "🌟", "💥"],
      confettiNumber: 350,
    }); // Celebrate!
    alert("Blog submitted successfully!");
  };

  const clearForm = () => {
    setInputValue1("");
    setInputValue2("");
    setInputValue3("");
    setInputValue4("");
    setInputValue5("");
    setInputValue6("");
    setInputValue7("");
    setInputValue8(null);
    setImagePreview(""); // Clear image preview
  };

  const deleteBlog = (index) => {
    const updatedBlogs = blog.filter((_, i) => i !== index);
    setBlog(updatedBlogs);
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
  };

  const createBlog = () => {
    console.log("Blog created");
  }

  return (
    <div className="">
      <h1>Create your blog post</h1>
      {showForm && <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue1}
          onChange={(e) => setInputValue1(e.target.value)}
          placeholder="Enter your name"
          required
        />

        <input
          type="text"
          value={inputValue2}
          onChange={(e) => setInputValue2(e.target.value)}
          placeholder="Enter your email"
          required
        />

        <input
          type="text"
          value={inputValue3}
          onChange={(e) => setInputValue3(e.target.value)}
          placeholder="Blog Title"
          required
        />

        <textarea
          value={inputValue4}
          onChange={(e) => setInputValue4(e.target.value)}
          placeholder="Blog Content"
          required
        />

        <textarea
          value={inputValue5}
          onChange={(e) => setInputValue5(e.target.value)}
          placeholder="Conclusion"
          required
        />

        <input
          type="date"
          value={inputValue6}
          onChange={(e) => setInputValue6(e.target.value)}
          required
        />

        <input
          type="time"
          value={inputValue7}
          onChange={(e) => setInputValue7(e.target.value)}
          required
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          required
        />
        {imagePreview && (
          <div className="image-preview">
            <img src={imagePreview} alt="Preview" style={{ width: "200px" }} />
          </div>
        )}

        <button style={{margin:'0 auto', width:'100%'}} type="submit">Submit</button>
        <button style={{margin:'0 auto', width:'100%'}} onClick={() => setShowForm(false) }>Cancel</button>
      </form>}
      {!showForm && <button style={{margin:'0 auto', width:'50%'}} onClick={() => setShowForm(true)} >Create Blog</button>}

      {blog.length > 0 && (
      <div style={{ marginTop: "20px" }}>
        
        {blog.map((item, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
             <Link className="link" to="/blog" key={index} state={item}>
              <h4>{item.title}</h4>
            </Link>
            {item.image && (
              <img
                src={item.image}
                alt={`Blog ${item.title}`}
                style={{ width: "100px", height: "auto" }}
              />
            )}
            <button
              className="delete-button"
              onClick={() => deleteBlog(index)}
            > 
              Delete
            </button>
          </div>
        ))}
        
      </div>)}
      {/* <Outlet /> */}
    </div>
  );
}

export default Home;
