import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "../components/Button";
import { ChevronDown, Sparkles, Building2, Users, Package, Palette } from "lucide-react";

export function Services() {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const [showEventForm, setShowEventForm] = useState(false);
  const [showInstallationForm, setShowInstallationForm] = useState(false);

  const [eventFormData, setEventFormData] = useState({
    eventName: "",
    eventType: "",
    city: "",
    footfall: "",
    date: "",
    requirement: "",
    name: "",
    phone: "",
    email: "",
  });

  const [installationFormData, setInstallationFormData] = useState({
    spaceType: "",
    city: "",
    area: "",
    timeline: "",
    theme: "",
    name: "",
    phone: "",
    email: "",
  });

  const services = [
    {
      title: "Workshops",
      icon: Sparkles,
      shortDescription: "Hands-on origami and paper art workshops for all ages and skill levels.",
      fullDescription:
        "Our workshops are designed to inspire creativity and teach the art of paper folding. From beginner-friendly sessions to advanced techniques, we offer a wide range of workshops tailored to different audiences. Whether you're looking for a fun activity for kids, a team-building exercise for your company, or an educational experience for students, our expert instructors make learning enjoyable and rewarding. Each workshop includes all materials and personalized guidance.",
      cta: "Book a Workshop",
      ctaLink: "/workshops",
    },
    {
      title: "Corporate Events",
      icon: Building2,
      shortDescription: "Engaging team-building activities that foster creativity and collaboration.",
      fullDescription:
        "Transform your corporate events with our unique paper art experiences. Our corporate workshops are perfect for team building, stress relief, and fostering innovation. We customize each session to align with your company culture and objectives. Activities range from collaborative large-scale installations to individual creative projects. The meditative nature of origami promotes mindfulness and mental well-being, making it ideal for busy professionals. We can accommodate groups of any size and travel to your location.",
      cta: "Plan Your Event",
      ctaLink: "/workshops",
    },
    {
      title: "Event Partner / Activity Partner",
      icon: Users,
      shortDescription: "Add a creative touch to your events with interactive paper art stations.",
      fullDescription:
        "Make your events unforgettable with Kirigami Arts as your activity partner. We set up interactive paper art stations at festivals, fairs, weddings, birthday parties, and community events. Our team engages attendees with hands-on origami activities, creating memorable experiences for guests of all ages. We provide all materials, expert instructors, and beautiful displays. Whether it's a small gathering or a large public event, we bring creativity and joy to your celebration. Our activities are perfect for keeping guests entertained and creating unique photo opportunities.",
      cta: "Partner With Us",
      ctaAction: () => setShowEventForm(true),
    },
    {
      title: "Products",
      icon: Package,
      shortDescription: "Handcrafted paper art products for decor, gifts, and special occasions.",
      fullDescription:
        "Discover our curated collection of handmade paper art products. From elegant wall art and delicate paper flowers to geometric sculptures and decorative lanterns, each piece is crafted with precision and care. Our products are perfect for home decor, office spaces, weddings, and gifts. We also offer custom creations tailored to your specifications—whether you need branded corporate gifts, wedding decorations, or personalized art pieces. All products are made using high-quality materials and can be customized in various colors and sizes.",
      cta: "Browse Products",
      ctaLink: "/products",
    },
    {
      title: "Installations",
      icon: Palette,
      shortDescription: "Stunning large-scale paper art installations for galleries, events, and spaces.",
      fullDescription:
        "Transform your space with breathtaking paper art installations. Our team specializes in creating immersive, large-scale installations for galleries, museums, corporate offices, hotels, retail spaces, and special events. We work closely with you from concept to completion, ensuring the installation reflects your vision and enhances your environment. Each installation is custom-designed and meticulously crafted. We handle everything from initial sketches and prototypes to installation and maintenance. Our installations have been featured in exhibitions, festivals, and prestigious venues, creating wow moments and lasting impressions.",
      cta: "Commission an Installation",
      ctaAction: () => setShowInstallationForm(true),
    },
  ];

  const handleEventSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll get back to you soon to discuss your event partnership.");
    setShowEventForm(false);
    setEventFormData({
      eventName: "",
      eventType: "",
      city: "",
      footfall: "",
      date: "",
      requirement: "",
      name: "",
      phone: "",
      email: "",
    });
  };

  const handleInstallationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll contact you to discuss your installation project.");
    setShowInstallationForm(false);
    setInstallationFormData({
      spaceType: "",
      city: "",
      area: "",
      timeline: "",
      theme: "",
      name: "",
      phone: "",
      email: "",
    });
  };

  return (
    <div>
      {/* Header Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary to-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl mb-6 text-foreground"
          >
            Our <span className="text-primary">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            From workshops to installations, we bring the art of paper folding to life in creative and
            meaningful ways.
          </motion.p>
        </div>
      </section>

      {/* Services Expandable Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-3xl shadow-lg overflow-hidden"
            >
              {/* Service Header */}
              <button
                onClick={() => setExpandedService(expandedService === index ? null : index)}
                className="w-full p-8 flex items-center justify-between hover:bg-secondary/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl mb-1 text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground">{service.shortDescription}</p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: expandedService === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-primary" />
                </motion.div>
              </button>

              {/* Expanded Content */}
              <AnimatePresence>
                {expandedService === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-8 pt-0 border-t border-border">
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {service.fullDescription}
                      </p>
                      <Button
                        onClick={() => {
                          if (service.ctaLink) {
                            window.location.href = service.ctaLink;
                          } else if (service.ctaAction) {
                            service.ctaAction();
                          }
                        }}
                      >
                        {service.cta}
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Event Partner Form Modal */}
      <AnimatePresence>
        {showEventForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setShowEventForm(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card rounded-3xl p-8 shadow-2xl max-w-3xl w-full my-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl text-foreground">Event Partnership Form</h2>
                <button
                  onClick={() => setShowEventForm(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleEventSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 text-foreground">Event Name *</label>
                    <input
                      type="text"
                      required
                      value={eventFormData.eventName}
                      onChange={(e) => setEventFormData({ ...eventFormData, eventName: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-foreground">Type of Event *</label>
                    <input
                      type="text"
                      required
                      value={eventFormData.eventType}
                      onChange={(e) => setEventFormData({ ...eventFormData, eventType: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 text-foreground">City *</label>
                    <input
                      type="text"
                      required
                      value={eventFormData.city}
                      onChange={(e) => setEventFormData({ ...eventFormData, city: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-foreground">Expected Footfall</label>
                    <input
                      type="number"
                      value={eventFormData.footfall}
                      onChange={(e) => setEventFormData({ ...eventFormData, footfall: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-foreground">Event Date</label>
                  <input
                    type="date"
                    value={eventFormData.date}
                    onChange={(e) => setEventFormData({ ...eventFormData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-foreground">Activity Requirement</label>
                  <textarea
                    value={eventFormData.requirement}
                    onChange={(e) => setEventFormData({ ...eventFormData, requirement: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 rounded-2xl bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  ></textarea>
                </div>

                <div className="border-t border-border pt-6">
                  <h3 className="text-xl mb-4 text-foreground">Contact Details</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block mb-2 text-foreground">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={eventFormData.name}
                        onChange={(e) => setEventFormData({ ...eventFormData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block mb-2 text-foreground">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          value={eventFormData.phone}
                          onChange={(e) => setEventFormData({ ...eventFormData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-2xl bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label className="block mb-2 text-foreground">Email *</label>
                        <input
                          type="email"
                          required
                          value={eventFormData.email}
                          onChange={(e) => setEventFormData({ ...eventFormData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-2xl bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 justify-end">
                  <Button type="button" variant="secondary" onClick={() => setShowEventForm(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">Submit Request</Button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Installation Form Modal */}
      <AnimatePresence>
        {showInstallationForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setShowInstallationForm(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card rounded-3xl p-8 shadow-2xl max-w-3xl w-full my-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl text-foreground">Installation Request Form</h2>
                <button
                  onClick={() => setShowInstallationForm(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleInstallationSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 text-foreground">Type of Space *</label>
                    <select
                      required
                      value={installationFormData.spaceType}
                      onChange={(e) => setInstallationFormData({ ...installationFormData, spaceType: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select...</option>
                      <option value="gallery">Gallery/Museum</option>
                      <option value="corporate">Corporate Office</option>
                      <option value="retail">Retail Space</option>
                      <option value="hotel">Hotel/Restaurant</option>
                      <option value="event">Event Venue</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2 text-foreground">City *</label>
                    <input
                      type="text"
                      required
                      value={installationFormData.city}
                      onChange={(e) => setInstallationFormData({ ...installationFormData, city: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 text-foreground">Area (sq ft)</label>
                    <input
                      type="number"
                      value={installationFormData.area}
                      onChange={(e) => setInstallationFormData({ ...installationFormData, area: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-foreground">Timeline</label>
                    <input
                      type="text"
                      placeholder="e.g., 2-3 months"
                      value={installationFormData.timeline}
                      onChange={(e) => setInstallationFormData({ ...installationFormData, timeline: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-foreground">Theme / Concept</label>
                  <textarea
                    value={installationFormData.theme}
                    onChange={(e) => setInstallationFormData({ ...installationFormData, theme: e.target.value })}
                    rows={3}
                    placeholder="Tell us about your vision..."
                    className="w-full px-4 py-3 rounded-2xl bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  ></textarea>
                </div>

                <div className="border-t border-border pt-6">
                  <h3 className="text-xl mb-4 text-foreground">Contact Details</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block mb-2 text-foreground">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={installationFormData.name}
                        onChange={(e) => setInstallationFormData({ ...installationFormData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block mb-2 text-foreground">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          value={installationFormData.phone}
                          onChange={(e) => setInstallationFormData({ ...installationFormData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-2xl bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label className="block mb-2 text-foreground">Email *</label>
                        <input
                          type="email"
                          required
                          value={installationFormData.email}
                          onChange={(e) => setInstallationFormData({ ...installationFormData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-2xl bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 justify-end">
                  <Button type="button" variant="secondary" onClick={() => setShowInstallationForm(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">Submit Request</Button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
