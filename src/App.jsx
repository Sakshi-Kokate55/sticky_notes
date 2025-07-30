import { useEffect, useState } from "react";
import Card from "./Components/Card/Card";
import { NotesData } from "./Data/notes";
import Container from "./Components/Container/Container";

function App() {
  const [cardTitle, setCardTitle] = useState("");
  const [cardDescr, setCardDescr] = useState("");
  const [notes, setNotes] = useState(NotesData);
  const [isHovered, setIsHovered] = useState(false);
  const [quote, setQuote] = useState("Loading...");
  const [quotes, setQuotes] = useState([]); 

  
  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
      .then((response) => response.json())
      .then((res) => {
        setQuotes(res.quotes);
        setQuote(res.quotes[0]?.quote); 
      })
      .catch((err) => setQuote("Failed to load quote"));
  }, []);

  
  const changeQuote = () => {
    if (quotes.length === 0) return;
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex].quote);
  };

  const submitBtnHandler = () => {
    if (cardTitle.trim() === "" || cardDescr.trim() === "") return;

    const newNote = {
      id: notes.length + 1,
      heading: cardTitle,
      description: cardDescr,
    };

    setNotes([...notes, newNote]);
    setCardTitle("");
    setCardDescr("");
  };

  const formStyle = {
    backgroundColor: "#ffffff",
    padding: "25px 30px",
    margin: "30px auto",
    maxWidth: "400px",
    borderRadius: "12px",
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    fontFamily: "Segoe UI, sans-serif",
  };

  const inputStyle = {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
  };

  const buttonStyle = {
    backgroundColor: isHovered ? "#6a0dad" : "#8e44ad",
    color: "#fff",
    border: "none",
    padding: "12px 18px",
    borderRadius: "10px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    boxShadow: isHovered
      ? "0 8px 20px rgba(138, 43, 226, 0.5)"
      : "0 5px 15px rgba(142, 68, 173, 0.4)",
    transition: "all 0.3s ease-in-out",
  };

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "30px", fontSize: "36px" }}>
        Sakshi's Sticky Notes App
      </h1>

      
      <div
        style={{
          textAlign: "center",
          margin: "20px 0",
          fontStyle: "italic",
          color: "#6a0dad",
          fontSize: "18px",
        }}
      >
        “{quote}”
        <br />
        <button
          onClick={changeQuote}
          style={{
            marginTop: "10px",
            fontSize: "14px",
            background: "transparent",
            border: "none",
            color: "#8e44ad",
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          Change Quote
        </button>
      </div>

     
      <div className="form-container" style={formStyle}>
        <label htmlFor="card-title">Sticky Title</label>
        <input
          type="text"
          id="card-title"
          value={cardTitle}
          onChange={(e) => setCardTitle(e.target.value)}
          style={inputStyle}
          placeholder="Enter title..."
        />

        <label htmlFor="card-descr">Description</label>
        <input
          type="text"
          id="card-descr"
          value={cardDescr}
          onChange={(e) => setCardDescr(e.target.value)}
          style={inputStyle}
          placeholder="Enter description..."
        />

        <button
          style={buttonStyle}
          onClick={submitBtnHandler}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Create Note
        </button>
      </div>

     
      <Container height={"100vh"} width={"100vw"}>
        {notes.map((note) => (
          <Card
            key={note.id}
            heading={note.heading}
            desc={note.description}
          />
        ))}
      </Container>
    </>
  );
}

export default App;
