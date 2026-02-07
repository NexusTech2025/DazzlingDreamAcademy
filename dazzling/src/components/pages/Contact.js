import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  CheckCircle,
  MessageSquare,
  Clock
} from 'lucide-react';
import FeatureHighlightCard from '../cards/FeatureHighlightCard.js';
import FAQItem from '../cards/FAQItem.js';
import CTA from '../cards/CTA.js';
import { featureHighlights, faqData } from '../cards/data.js';


const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  
  const contactInfo = [
    {
      icon: <Phone />,
      title: "Call Us",
      content: (
        <>
          <p className="text-sm text-slate-500 font-medium">Manish Kumar</p>
          <a
            className="block text-slate-800 font-semibold hover:text-primary transition-colors"
            href="tel:+919876543210"
          >
            +91 98765 43210
          </a>
          <p className="text-sm text-slate-500 font-medium mt-2">Radhey Soni</p>
          <a
            className="block text-slate-800 font-semibold hover:text-primary transition-colors"
            href="tel:+919876543211"
          >
            +91 98765 43211
          </a>
        </>
      )
    },
    {
      icon: <MessageSquare />,
      title: "WhatsApp",
      content: (
        <>
          <p className="text-slate-500 text-sm mb-4">
            Instant support for your queries
          </p>
          <a
            className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary-dark transition-colors"
            href="#"
          >
            Chat with us
            <span className="material-symbols-outlined text-sm">
              arrow_outward
            </span>
          </a>
        </>
      )
    },
    {
      icon: <MapPin />,
      title: "Visit Us",
      content: (
        <>
          <p className="text-slate-600 font-medium leading-relaxed">
            9, Jagat Vihar,<br />Near Puliya
          </p>
          <a
            className="text-xs text-primary font-bold uppercase tracking-wider mt-3 inline-block hover:underline"
            href="#"
          >
            Get Directions
          </a>
        </>
      )
    },
    {
      icon: <Clock />,
      title: "Working Hours",
      content: (
        <>
          <p className="text-slate-600 font-medium">Mon - Sat</p>
          <p className="text-navy-900 font-bold text-lg mt-1">
            8:00 AM - 7:00 PM
          </p>
          <p className="text-slate-400 text-sm mt-2">Sunday Closed</p>
        </>
      )
    }
  ]

  return (
    <div className="bg-background-light">
    <section className="pt-32 pb-16 bg-background-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span
          className="text-slate-500 uppercase tracking-widest text-sm font-semibold mb-3 block"
          >Contact Us</span
        >
        <h1
          className="font-display text-4xl lg:text-5xl font-bold text-navy-900 mb-6 max-w-3xl mx-auto leading-tight"
        >
          We’re Here to Guide Your
          <span className="gold-gradient-text">Learning Journey</span>
        </h1>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          Whether you have questions about our courses, admissions, or just want
          to say hello, we are ready to answer all your questions.
        </p>
      </div>
    </section>
    <section className="py-12 bg-background-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_30px_-10px_rgba(212,175,55,0.2)] transition-all duration-300 group text-center border border-slate-100"
            >
              <div
                className="w-14 h-14 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors"
              >
                <div className="text-primary text-2xl group-hover:text-white transition-colors">
                  {item.icon}
                </div>
              </div>
              <h3 className="font-display font-bold text-lg text-navy-900 mb-3">
                {item.title}
              </h3>
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-white relative overflow-hidden">
      <div
        className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
      ></div>
      <div
        className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-navy-900/5 rounded-full blur-3xl"
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden flex flex-col lg:flex-row"
        >
          <div className="w-full lg:w-3/5 p-8 lg:p-12">
            <h2 className="font-display text-3xl font-bold text-navy-900 mb-2">
              Send us a Message
            </h2>
            <p className="text-slate-500 mb-8">
              Fill out the form below and our team will get back to you within
              24 hours.
            </p>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    className="block text-sm font-medium text-navy-900 mb-2"
                    htmlFor="name"
                    >Full Name</label
                  >
                  <input
                    className="w-full rounded-lg border-slate-200 focus:border-primary focus:ring-primary/20 bg-slate-50 py-3 px-4 text-slate-800 placeholder:text-slate-400"
                    id="name"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-navy-900 mb-2"
                    htmlFor="class"
                    >Student Class</label
                  >
                  <select
                    className="w-full rounded-lg border-slate-200 focus:border-primary focus:ring-primary/20 bg-slate-50 py-3 px-4 text-slate-800"
                    id="class"
                  >
                    <option disabled="" selected="" value="">
                      Select Class
                    </option>
                    <option>Class 6</option>
                    <option>Class 7</option>
                    <option>Class 8</option>
                    <option>Class 9</option>
                    <option>Class 10</option>
                    <option>Class 11</option>
                    <option>Class 12</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    className="block text-sm font-medium text-navy-900 mb-2"
                    htmlFor="phone"
                    >Phone Number</label
                  >
                  <input
                    className="w-full rounded-lg border-slate-200 focus:border-primary focus:ring-primary/20 bg-slate-50 py-3 px-4 text-slate-800 placeholder:text-slate-400"
                    id="phone"
                    placeholder="+91 98765 43210"
                    type="tel"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-navy-900 mb-2"
                    htmlFor="city"
                    >City</label
                  >
                  <input
                    className="w-full rounded-lg border-slate-200 focus:border-primary focus:ring-primary/20 bg-slate-50 py-3 px-4 text-slate-800 placeholder:text-slate-400"
                    id="city"
                    placeholder="Your City"
                    type="text"
                  />
                </div>
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-navy-900 mb-2"
                  htmlFor="message"
                  >Message</label
                >
                <textarea
                  className="w-full rounded-lg border-slate-200 focus:border-primary focus:ring-primary/20 bg-slate-50 py-3 px-4 text-slate-800 placeholder:text-slate-400"
                  id="message"
                  placeholder="How can we help you?"
                  rows="4"
                ></textarea>
              </div>
              <button
                className="btn-gold-gradient w-full py-4 rounded-lg font-bold text-navy-900 shadow-lg text-lg tracking-wide uppercase"
                type="submit"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
          <div
            className="w-full lg:w-2/5 bg-navy-900 p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"
            ></div>
            <div
              className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl"
            ></div>
            <div className="relative z-10 text-white">
              <div
                className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm"
              >
                <span className="material-symbols-outlined text-primary text-2xl"
                  >family_star</span
                >
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">
                Dear Parents,
              </h3>
              <p className="text-slate-300 leading-relaxed mb-6 font-light">
                Choosing the right academy is a significant decision. At
                Dazzling Dream Academy, we understand your concerns and
                aspirations for your child.
              </p>
              <p className="text-slate-300 leading-relaxed mb-8 font-light">
                We invite you to reach out, visit our campus, and see firsthand
                how we nurture potential into excellence. Our faculty is
                dedicated to transparent communication and personalized
                guidance.
              </p>
              <div
                className="flex items-center gap-3 pt-6 border-t border-white/10"
              >
                <div className="flex -space-x-3">
                  <img
                    alt="User 1"
                    className="w-10 h-10 rounded-full border-2 border-navy-900"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaPFIWwBwnaVGjKLqQ_w4zvrPNcDQq_IqGxCnnz84JQrylqyrvo8Vu8ENU3776jt8DPrvzdB7xRi3Zd1zM58Oj-YkEcm4FhBi9xHlSUl1TNZC_Ir3IpyBojHcwkAAnDf63SH5yNO2TyGDF_OcT-NrsG92i2oDxpHPrLCyxMXPl-5MKJJvgfO8mKc2jy_MkO0FYi0FgpI9FzAiviAu0B1T8Bemb7i2EZmYUZhdHcvuXKjBi18fSJ_vRUgh2GKA4iMr0sphA3Y1ADA"
                  />
                  <img
                    alt="User 2"
                    className="w-10 h-10 rounded-full border-2 border-navy-900"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdESz1F7D56HfKUiEp8HbctvrSnN4IZw2UltSOQ9p8mOSKM-d52EZypF6yBCIlJmNfEx4DeY95sxEGVr5-DKqXx9oXoJoylI9_VrwllYGPtWO0GX-CTkb7LliTV9Wo65DpdSG99z3b9ZLbu0JW1bdna5K8kRKMeGXggayEs1EYKOncOC_XpJ_NYxl7TufsAUJrwolxunfqarIGLOOj3rAvZOnaDc4V7w2uWGsf1TwNU9R4EClIyH53ooh1FILkQhftF3V0vp3Gvw"
                  />
                  <img
                    alt="User 3"
                    className="w-10 h-10 rounded-full border-2 border-navy-900"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAg7_UzCBJIz3dd-v4X0bYh6l2hOvfYdzI4d5pvidGBYAcx9utP8mgpu-0CExLgmH4mNUA0ijuublBtbZ0tTEEFFd2ZUwTuN4seXTsjbcLlYr_EXSNPFNWf-xKLPz4uABUwDJUMgL5lkk3CNbb-la1nDsCMwY0ixluiiZ1Fnlr0VlqtzRDfYoMymO_In8wBKhgJcWdOe0ojik6LgI1VIMTwXaEROAvkg9KzNuiOav5FzPMEE6p7UanOXLdAc-BGsie7T5j1V21zQ"
                  />
                </div>
                <div className="text-sm">
                  <p className="font-bold text-white">500+ Parents</p>
                  <p className="text-slate-400">Trust us yearly</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-16 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureHighlights.map((item, index) => (
            <FeatureHighlightCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold text-navy-900 text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((item) => (
            <FAQItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
    <CTA />
    </div>
  );
};

export default Contact;
