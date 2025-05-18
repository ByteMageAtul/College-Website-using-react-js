import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function Submissions() {
  const navigate = useNavigate();
  const [submissions, setSubmissions] = useState([]);
  const [sortedSubmissions, setSortedSubmissions] = useState([]);
  const [sortOption, setSortOption] = useState("newest");
  const [filterOption, setFilterOption] = useState("all");
  const [loading, setLoading] = useState(false);
  const [replyingEmail, setReplyingEmail] = useState(null);
  const [replyMessage, setReplyMessage] = useState("");
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (!isAdmin) {
      alert("Unauthorized Access!");
      navigate("/admin-login");
    } else {
      const storedSubmissions = JSON.parse(localStorage.getItem("submissions")) || [];
      setSubmissions(storedSubmissions);
    }
  }, [navigate]);

  useEffect(() => {
    let sorted = [...submissions];
    if (sortOption === "newest") {
      sorted.sort((a, b) => new Date(b.time) - new Date(a.time));
    } else {
      sorted.sort((a, b) => new Date(a.time) - new Date(b.time));
    }

    if (filterOption === "replied") {
      sorted = sorted.filter((sub) => sub.replied);
    } else if (filterOption === "unreplied") {
      sorted = sorted.filter((sub) => !sub.replied);
    }

    setSortedSubmissions(sorted);
  }, [submissions, sortOption, filterOption]);

  const sendReply = (email, name) => {
    setLoading(true);

    const templateParams = {
      to_email: email,
      from_name: "Atul Kumar",
      time: new Date().toLocaleString(),
      to_name: name,
      message: replyMessage,
    };

    emailjs
      .send(
        "service_uecj92a",
        "template_l02k65z",
        templateParams,
        "fxXv1J6DdPrKA49K1"
      )
      .then(() => {
        showToast("Reply sent successfully!");

        const updatedSubmissions = submissions.map((sub) =>
          sub.email === email
            ? { ...sub, replied: true, replyText: replyMessage }
            : sub
        );

        setSubmissions(updatedSubmissions);
        localStorage.setItem("submissions", JSON.stringify(updatedSubmissions));

        setReplyingEmail(null);
        setReplyMessage("");
        setLoading(false);
      })
      .catch(() => {
        showToast("Error sending reply. Please try again.", true);
        setLoading(false);
      });
  };

  const deleteSubmission = (email, time) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this submission?");
    if (!confirmDelete) return;

    const updatedSubmissions = submissions.filter(
      (sub) => !(sub.email === email && sub.time === time)
    );

    setSubmissions(updatedSubmissions);
    localStorage.setItem("submissions", JSON.stringify(updatedSubmissions));
    showToast("Submission deleted successfully!");
  };

  const clearAllSubmissions = () => {
    const confirmClear = window.confirm("Are you sure you want to delete all submissions?");
    if (!confirmClear) return;

    setSubmissions([]);
    localStorage.removeItem("submissions");
    showToast("All submissions cleared.");
  };

  const showToast = (message, error = false) => {
    setToastMessage({ text: message, error });
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <div className="relative mt-18 min-h-screen p-8 bg-gradient-to-b from-blue-100 to-blue-300">
      {toastMessage && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 20, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          className={`fixed top-4 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-md shadow-lg text-white font-semibold z-50
            ${toastMessage.error ? "bg-red-500" : "bg-green-500"}`}
        >
          {toastMessage.text}
        </motion.div>
      )}

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold mb-10 mt-20 text-center text-gray-800 drop-shadow"
      >
        Visitor Submissions
      </motion.h1>

      <div className="flex flex-wrap justify-between items-center mb-10">
        <div className="flex gap-4">
          <select
            onChange={(e) => setSortOption(e.target.value)}
            value={sortOption}
            className="p-2 border border-gray-300 rounded-md shadow focus:ring-2 focus:ring-blue-400"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>

          <select
            onChange={(e) => setFilterOption(e.target.value)}
            value={filterOption}
            className="p-2 border border-gray-300 rounded-md shadow focus:ring-2 focus:ring-blue-400"
          >
            <option value="all">All</option>
            <option value="replied">Replied</option>
            <option value="unreplied">Unreplied</option>
          </select>

          <button
            onClick={clearAllSubmissions}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-full shadow-md transition-all"
          >
            Clear All
          </button>
        </div>

        <button
          onClick={() => {
            localStorage.removeItem("isAdmin");
            navigate("/admin-login");
          }}
          className="bg-gradient-to-r from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 text-white px-6 py-2 rounded-full shadow-md transition-all"
        >
          Logout
        </button>
      </div>

      {sortedSubmissions.length === 0 ? (
        <p className="text-center text-gray-500">No Submissions Found.</p>
      ) : (
        <div className="grid gap-8">
          {sortedSubmissions.map((sub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <p><strong>Name:</strong> {sub.name}</p>
              <p><strong>Age:</strong> {sub.age}</p>
              <p><strong>Email:</strong> {sub.email}</p>
              <p><strong>Mobile:</strong> {sub.mobile}</p>
              <p><strong>Message:</strong> {sub.message}</p>
              <p><strong>Course:</strong> {sub.course}</p>
              <p className="mt-4"><strong>Submitted at:</strong> {sub.time}</p>
              <p className="mt-2"><strong>Status:</strong> {sub.replied ? "✅ Replied" : "❌ Pending"}</p>

              {sub.replyText && (
                <div className="mt-3 p-3 border border-green-400 bg-green-50 rounded-md">
                  <strong>Your Reply:</strong>
                  <p className="mt-1 text-gray-700">{sub.replyText}</p>
                </div>
              )}

              {!sub.replied && (
                <div className="mt-4 space-y-2">
                  {replyingEmail === sub.email ? (
                    <>
                      <textarea
                        value={replyMessage}
                        onChange={(e) => setReplyMessage(e.target.value)}
                        placeholder="Type your reply..."
                        className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-400 shadow"
                      ></textarea>
                      <div className="flex gap-4">
                        <button
                          onClick={() => sendReply(sub.email, sub.name)}
                          disabled={loading}
                          className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full shadow-md transition-all disabled:opacity-50"
                        >
                          {loading ? "Sending..." : "Send Reply"}
                        </button>
                        <button
                          onClick={() => setReplyingEmail(null)}
                          className="bg-gray-400 hover:bg-gray-500 text-white px-5 py-2 rounded-full shadow-md transition-all"
                        >
                          Cancel
                        </button>
                      </div>
                    </>
                  ) : (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setReplyingEmail(sub.email)}
                      className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-500 hover:to-indigo-700 text-white px-6 py-2 rounded-full shadow-md transition-all"
                    >
                      Reply
                    </motion.button>
                  )}
                </div>
              )}

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => deleteSubmission(sub.email, sub.time)}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full shadow-md transition-all mt-4"
              >
                Delete
              </motion.button>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Submissions;
