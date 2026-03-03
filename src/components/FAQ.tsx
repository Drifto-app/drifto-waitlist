import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
    question: string;
    answer: string;
    category: string;
}

const categories = ["All", "General", "Payments", "Safety", "Hosting"] as const;
type Category = (typeof categories)[number];

const faqData: FAQItem[] = [
    {
        question: "What is Drifto?",
        answer:
            "Drifto is a platform that connects you with unique and memorable experiences. Explore, book, and share activities to make the most out of every moment. On Drifto, hosts can also earn money by creating and hosting experiences for others.",
        category: "General",
    },
    {
        question: "How do I book an experience?",
        answer:
            "Booking an experience is simple! Browse through available experiences, select the one you like, choose your preferred date and time, and complete the payment process. You'll receive a confirmation and ticket details instantly.",
        category: "General",
    },
    {
        question: "What payment methods are accepted?",
        answer:
            "We accept various payment methods including credit/debit cards, bank transfers, and mobile payment options. All transactions are secured with industry-standard encryption.",
        category: "Payments",
    },
    {
        question: "Can I cancel my booking?",
        answer:
            "Yes, you can cancel your booking according to the cancellation policy set by the host. Refund eligibility depends on how far in advance you cancel. Check the specific experience's cancellation terms before booking.",
        category: "Payments",
    },
    {
        question: "What safety measures does Drifto have in place?",
        answer:
            "We prioritize your safety with verified hosts, secure payment processing, user reviews and ratings, and 24/7 customer support. All experiences are required to meet our safety guidelines and standards.",
        category: "Safety",
    },
    {
        question: "What happens if the host cancels my booking?",
        answer:
            "If a host cancels your booking, you'll receive a full refund and be notified immediately. We'll also help you find alternative experiences if desired. Hosts who frequently cancel may face penalties or account suspension.",
        category: "Payments",
    },
    {
        question: "How do I become a verified host?",
        answer:
            "To become a verified host, complete your profile with accurate information, provide valid identification, and submit your experience for review. Our team will verify your details and ensure your experience meets our quality standards before approval.",
        category: "Hosting",
    },
    {
        question: "Is my personal information safe?",
        answer:
            "Absolutely. We use advanced security measures to protect your personal and payment information. Your data is encrypted and we never share your information with third parties without your consent. Read our privacy policy for more details.",
        category: "Safety",
    },
    {
        question: "How do I contact the host?",
        answer:
            "Once you've booked an experience, you can contact the host directly through our messaging system in your Drifto account. This allows you to ask questions, coordinate details, and communicate securely before and during your experience.",
        category: "Hosting",
    },
    {
        question: "How can I manage my bookings?",
        answer:
            "You can manage all your bookings through your Drifto account dashboard. View upcoming experiences, access tickets, check booking history, request changes, and contact hosts all in one place. Download our mobile app for on-the-go management.",
        category: "General",
    },
];

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.08,
        },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" as const },
    },
};

const accordionContent = {
    hidden: { height: 0, opacity: 0 },
    show: {
        height: "auto",
        opacity: 1,
        transition: { duration: 0.35, ease: "easeOut" as const },
    },
    exit: {
        height: 0,
        opacity: 0,
        transition: { duration: 0.25, ease: "easeIn" as const },
    },
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number>(0);
    const [activeCategory, setActiveCategory] = useState<Category>("All");

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    const filteredFAQs =
        activeCategory === "All"
            ? faqData
            : faqData.filter((faq) => faq.category === activeCategory);

    return (
        <section id="faq" className="py-20 px-6 bg-white">
            <motion.div
                className="max-w-4xl mx-auto"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
            >
                {/* Header */}
                <motion.div variants={fadeUp} className="text-center mb-10">
                    <h2 className="text-2xl md:text-5xl font-extrabold text-gray-900 mb-4">
                        Frequently Asked <span className="text-blue-500">Questions</span>
                    </h2>
                    <p className="text-base text-gray-600">
                        Quick answers to questions you may have about Drifto.
                    </p>
                    <p className="text-base text-gray-600">
                        Can't find answers here?{" "}
                        <a
                            href="mailto:contact@drifto.com"
                            className="text-blue-500 hover:text-blue-600 font-medium"
                        >
                            Contact us
                        </a>
                    </p>
                </motion.div>

                {/* Category Tabs */}
                <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-2 mb-10">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => {
                                setActiveCategory(cat);
                                setOpenIndex(0);
                            }}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${activeCategory === cat
                                    ? "bg-blue-600 text-white shadow-md"
                                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* FAQ Accordion */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    key={activeCategory}
                    className="space-y-4"
                >
                    {filteredFAQs.map((faq, index) => (
                        <motion.div
                            key={`${activeCategory}-${index}`}
                            variants={fadeUp}
                            className={`rounded-2xl overflow-hidden transition-all duration-200 ${openIndex === index
                                    ? "bg-gray-100 border-l-4 border-l-gray-900"
                                    : "bg-gray-50 border-l-4 border-l-transparent"
                                }`}
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
                            >
                                <h3 className="text-base font-bold text-gray-900 pr-4">
                                    {faq.question}
                                </h3>
                                {openIndex === index ? (
                                    <ChevronUp className="w-6 h-6 text-gray-900 shrink-0" />
                                ) : (
                                    <ChevronDown className="w-6 h-6 text-blue-500 shrink-0" />
                                )}
                            </button>

                            {/* Animated accordion content */}
                            <AnimatePresence initial={false}>
                                {openIndex === index && (
                                    <motion.div
                                        variants={accordionContent}
                                        initial="hidden"
                                        animate="show"
                                        exit="exit"
                                        className="px-8 overflow-hidden"
                                    >
                                        <p className="pb-6 pt-2 text-gray-700 text-base leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default FAQ;
