import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "../components/Button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { X, Users, Building2, GraduationCap } from "lucide-react";

export function Workshops() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    workshopType: "",
    city: "",
    participants: "",
    date: "",
    message: "",
  });

  const highlights = [
    "https://images.unsplash.com/photo-1768815210987-591340ed69fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmlnYW1pJTIwcGFwZXIlMjBhcnQlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzM4MzY2NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1593976024153-7b31b96d1685?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXBlciUyMGNyYW5lJTIwb3JpZ2FtaXxlbnwxfHx8fDE3NzM4MDQwMzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1771440048215-d7860ac12a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXBlciUyMGFydCUyMHdvcmtzaG9wJTIwY3JlYXRpdmV8ZW58MXx8fHwxNzczODM2NjUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1737276719535-5c72b6f6495c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMHBhcGVyJTIwZGVjb3JhdGlvbnN8ZW58MXx8fHwxNzczODM2NjUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1562173272-edd6186e492b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmlnYW1pJTIwYnV0dGVyZmx5JTIwY29sb3JmdWx8ZW58MXx8fHwxNzczODM2NjU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1613166766364-0e724ececb66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXBlciUyMGxhbnRlcm5zJTIwZGVjb3JhdGlvbnxlbnwxfHx8fDE3NzM4MzY2NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      text: "The workshop was absolutely amazing! I learned so much and had a wonderful time creating beautiful paper art.",
      image: "https://images.unsplash.com/photo-1762522921456-cdfe882d36c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsJTIwaGVhZHNob3R8ZW58MXx8fHwxNzczODM2NjU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Rahul Kumar",
      text: "Kirigami Arts brought our corporate event to life! The team building session was engaging and creative.",
      image: "https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBzbWlsaW5nJTIwcG9ydHJhaXQlMjBidXNpbmVzc3xlbnwxfHx8fDE3NzM4MzY2NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Anita Desai",
      text: "The installation at our gallery was stunning. It transformed the entire space into something magical!",
      image: "https://images.unsplash.com/photo-1565069859254-6248c5a4bc67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHBlb3BsZSUyMHNtaWxpbmclMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzM4MzY2NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const workshopTypes = [
    {
      title: "Private Workshops",
      description: "Intimate, personalized sessions for individuals, families, or small groups. Perfect for birthdays, celebrations, or a creative day out.",
      icon: Users,
    },
    {
      title: "Corporate Workshops",
      description: "Engaging team-building activities that foster creativity, collaboration, and stress relief. Ideal for companies looking to energize their teams.",
      icon: Building2,
    },
    {
      title: "Educational / School Workshops",
      description: "Interactive learning experiences for students that combine art, mathematics, and spatial thinking in a fun, hands-on environment.",
      icon: GraduationCap,
    },
  ];

  const pastWorkshops = [
    { name: "Spring Origami Festival", date: "February 15, 2026", participants: 45 },
    { name: "Corporate Team Building - Tech Corp", date: "January 20, 2026", participants: 30 },
    { name: "School Workshop - Green Valley", date: "December 10, 2025", participants: 60 },
  ];

  const upcomingWorkshops = [
    { name: "Beginner Origami Workshop", date: "March 25, 2026", location: "Mumbai Studio" },
    { name: "Advanced Paper Sculpture", date: "April 10, 2026", location: "Delhi Center" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll contact you soon to confirm your workshop booking.");
    setFormData({
      name: "",
      phone: "",
      email: "",
      workshopType: "",
      city: "",
      participants: "",
      date: "",
      message: "",
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
            Discover the Art of <span className="text-primary">Paper Folding</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Join us for hands-on workshops where creativity meets technique. From beginners to advanced artists,
            we have something for everyone.
          </motion.p>
        </div>
      </section>

      {/* Highlights Gallery */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl text-center mb-12 text-foreground"
          >
            Workshop Highlights
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {highlights.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="rounded-3xl overflow-hidden shadow-lg cursor-pointer"
                onClick={() => setLightboxImage(image)}
              >
                <ImageWithFallback
                  src={image}
                  alt={`Workshop highlight ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X size={32} />
          </button>
          <ImageWithFallback
            src={lightboxImage}
            alt="Lightbox image"
            className="max-w-full max-h-full rounded-3xl"
          />
        </motion.div>
      )}

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl text-center mb-12 text-foreground"
          >
            What Our Participants Say
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-3xl p-6 shadow-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{testimonial.name}</h4>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Workshops */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl text-center mb-12 text-foreground"
          >
            Types of Workshops
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workshopTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-card rounded-3xl p-8 shadow-lg"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <type.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl mb-4 text-foreground">{type.title}</h3>
                <p className="text-muted-foreground mb-6">{type.description}</p>
                <Button>Book Now</Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Private Workshops */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl p-8 shadow-lg"
          >
            <h3 className="text-3xl mb-4 text-foreground">Private Workshops</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our private workshops offer an intimate and personalized learning experience. Whether you're celebrating
              a birthday, hosting a family gathering, or simply want to explore origami in a comfortable setting, we
              bring the workshop to you. Our expert instructors tailor the content to your group's skill level and
              interests, ensuring everyone has a memorable and rewarding experience. From basic folds to intricate
              designs, we'll guide you through the magical world of paper art.
            </p>
            <Button>Book a Private Workshop</Button>
          </motion.div>

          {/* Corporate Workshops */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl p-8 shadow-lg"
          >
            <h3 className="text-3xl mb-4 text-foreground">Corporate Workshops</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Transform your next team-building event into a creative adventure. Our corporate workshops are designed
              to foster collaboration, communication, and creativity among team members. Through hands-on origami
              activities, participants learn to work together, solve problems, and think outside the box. The meditative
              nature of paper folding also provides stress relief and mental clarity—perfect for busy professionals.
              We can customize the workshop to align with your company's values and objectives, making it a truly
              unique experience.
            </p>
            <Button>Plan a Corporate Workshop</Button>
          </motion.div>

          {/* Educational Workshops */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl p-8 shadow-lg"
          >
            <h3 className="text-3xl mb-4 text-foreground">Educational / School Workshops</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Bring art and learning together with our educational workshops. Designed for schools and educational
              institutions, these workshops introduce students to the fascinating intersection of art, mathematics,
              geometry, and creativity. Origami enhances fine motor skills, spatial reasoning, and concentration while
              providing a fun and engaging activity. Our instructors adapt the content to different age groups and
              learning objectives, making it suitable for primary through high school students. It's education that
              feels like play!
            </p>
            <Button>Book for Your Institution</Button>
          </motion.div>
        </div>
      </section>

      {/* Past & Upcoming Workshops */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Past Workshops */}
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl mb-8 text-foreground"
              >
                Past Workshops
              </motion.h3>
              <div className="space-y-4">
                {pastWorkshops.map((workshop, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card rounded-2xl p-6 shadow-md"
                  >
                    <h4 className="text-lg mb-2 text-foreground">{workshop.name}</h4>
                    <p className="text-sm text-muted-foreground">{workshop.date}</p>
                    <p className="text-sm text-muted-foreground">{workshop.participants} participants</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Upcoming Workshops */}
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl mb-8 text-foreground"
              >
                Upcoming Workshops
              </motion.h3>
              <div className="space-y-4">
                {upcomingWorkshops.map((workshop, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card rounded-2xl p-6 shadow-md border-2 border-primary/20"
                  >
                    <h4 className="text-lg mb-2 text-foreground">{workshop.name}</h4>
                    <p className="text-sm text-muted-foreground">{workshop.date}</p>
                    <p className="text-sm text-muted-foreground">{workshop.location}</p>
                    <Button className="mt-4">Register Now</Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Booking Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl text-center mb-12 text-foreground"
          >
            Book a Workshop
          </motion.h2>
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-card rounded-3xl p-8 shadow-lg space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-foreground">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block mb-2 text-foreground">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-foreground">Email *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-foreground">Type of Workshop *</label>
                <select
                  required
                  value={formData.workshopType}
                  onChange={(e) => setFormData({ ...formData, workshopType: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select...</option>
                  <option value="private">Private</option>
                  <option value="corporate">Corporate</option>
                  <option value="educational">Educational / School</option>
                </select>
              </div>
              <div>
                <label className="block mb-2 text-foreground">City *</label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-foreground">Number of Participants</label>
                <input
                  type="number"
                  value={formData.participants}
                  onChange={(e) => setFormData({ ...formData, participants: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block mb-2 text-foreground">Preferred Date</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-foreground">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 rounded-2xl bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              ></textarea>
            </div>

            <div className="text-center">
              <Button type="submit">Submit Workshop Request</Button>
            </div>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
