import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router";

const FAQ = () => {
  const { darkMode } = useAuth();
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Prize Arena?",
      answer:
        "Prize Arena is a competitive platform where users can participate in various contests and competitions to win exciting prizes. We offer contests in different categories including creative challenges, skill-based competitions, and knowledge tests.",
    },
    {
      question: "How do I participate in contests?",
      answer:
        "To participate in contests, you need to create an account and browse our available contests. Simply click on any contest that interests you, read the rules and requirements, and submit your entry before the deadline. Some contests may require an entry fee.",
    },
    {
      question: "What types of contests are available?",
      answer:
        "We offer a wide variety of contests including design competitions, writing challenges, photography contests, coding competitions, trivia quizzes, and creative challenges. New contests are added regularly to keep things exciting.",
    },
    {
      question: "How are winners selected?",
      answer:
        "Winners are selected based on the specific criteria outlined in each contest. This may include public voting, expert judging, or automated scoring systems. All judging processes are fair and transparent, and results are announced according to the contest timeline.",
    },
    {
      question: "What prizes can I win?",
      answer:
        "Prizes vary by contest and can include cash rewards, gift cards, electronics, software licenses, merchandise, and exclusive experiences. Prize details are clearly specified in each contest description before you participate.",
    },
    {
      question: "How do I become a contest creator?",
      answer:
        "If you're interested in hosting your own contests, you can apply to become a contest creator through your dashboard. Once approved, you'll be able to create and manage contests, set prizes, and engage with participants on our platform.",
    },
    {
      question: "Is there a fee to participate?",
      answer:
        "Many contests on Prize Arena are free to enter. However, some premium contests may require an entry fee, which helps fund larger prize pools. All fees are clearly displayed before you enter any contest.",
    },
    {
      question: "How do I claim my prize if I win?",
      answer:
        "Winners are notified via email and through their dashboard. Prize claiming instructions are provided with specific deadlines. Depending on the prize type, you may need to provide additional information for delivery or digital transfer.",
    },
  ];

  return (
    <div className={`py-16 px-4 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className={`text-4xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Frequently Asked Questions
          </h2>
          <p
            className={`text-lg ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Get answers to common questions about Prize Arena
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-lg border transition-all duration-300 ${
                darkMode
                  ? "bg-gray-800 border-gray-700 hover:border-gray-600"
                  : "bg-white border-gray-200 hover:border-gray-300"
              } ${openIndex === index ? "shadow-lg" : "shadow-sm"}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 rounded-lg ${
                  darkMode
                    ? "text-white hover:bg-gray-700"
                    : "text-gray-800 hover:bg-gray-50"
                }`}
              >
                <span className="font-semibold text-lg pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="flex-shrink-0 w-5 h-5 text-primary" />
                ) : (
                  <ChevronDown className="flex-shrink-0 w-5 h-5 text-primary" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4">
                  <div
                    className={`pt-2 border-t ${
                      darkMode ? "border-gray-700" : "border-gray-200"
                    }`}
                  >
                    <p
                      className={`text-base leading-relaxed ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div
          className={`mt-12 text-center p-6 rounded-lg ${
            darkMode ? "bg-gray-800" : "bg-white"
          } shadow-sm`}
        >
          <h3
            className={`text-xl font-semibold mb-2 ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Still have questions?
          </h3>
          <p className={`mb-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            Can't find the answer you're looking for? Please contact our support
            team.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-linear-to-r from-primary to-secondary text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
