import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Button } from "../components/Button";
import { Calendar, Clock } from "lucide-react";

export function Blog() {
  const navigate = useNavigate();

  const blogPosts = [
    {
      title: "The Art and Mathematics of Origami",
      excerpt: "Discover how origami combines artistic expression with mathematical principles to create beautiful forms.",
      image: "https://images.unsplash.com/photo-1768815210987-591340ed69fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmlnYW1pJTIwcGFwZXIlMjBhcnQlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzM4MzY2NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "March 10, 2026",
      readTime: "5 min read",
    },
    {
      title: "5 Easy Origami Projects for Beginners",
      excerpt: "Start your origami journey with these simple yet impressive projects perfect for newcomers.",
      image: "https://images.unsplash.com/photo-1593976024153-7b31b96d1685?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXBlciUyMGNyYW5lJTIwb3JpZ2FtaXxlbnwxfHx8fDE3NzM4MDQwMzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "March 5, 2026",
      readTime: "4 min read",
    },
    {
      title: "The Therapeutic Benefits of Paper Folding",
      excerpt: "Learn how origami can reduce stress, improve focus, and promote mindfulness in your daily life.",
      image: "https://images.unsplash.com/photo-1771440048215-d7860ac12a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXBlciUyMGFydCUyMHdvcmtzaG9wJTIwY3JlYXRpdmV8ZW58MXx8fHwxNzczODM2NjUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "February 28, 2026",
      readTime: "6 min read",
    },
    {
      title: "Creating Large-Scale Paper Installations",
      excerpt: "Behind the scenes of designing and installing massive paper art installations for public spaces.",
      image: "https://images.unsplash.com/photo-1607205042687-3128800e68a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBnYWxsZXJ5JTIwaW5zdGFsbGF0aW9uJTIwbW9kZXJufGVufDF8fHx8MTc3MzgzNjY1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "February 20, 2026",
      readTime: "8 min read",
    },
    {
      title: "Origami in Education: Teaching Through Art",
      excerpt: "How educators are using origami to teach geometry, creativity, and problem-solving skills.",
      image: "https://images.unsplash.com/photo-1769720205501-6da2da716884?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGFydCUyMGNsYXNzJTIwY3JlYXRpdmV8ZW58MXx8fHwxNzczODM2NjUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "February 15, 2026",
      readTime: "5 min read",
    },
    {
      title: "The History of Kirigami and Paper Cutting",
      excerpt: "Explore the ancient Japanese art of paper cutting and how it differs from traditional origami.",
      image: "https://images.unsplash.com/photo-1767854511197-fef7a03f0431?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmlnYW1pJTIwaW5zdGFsbGF0aW9uJTIwYXJ0fGVufDF8fHx8MTc3MzgzNjY1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "February 10, 2026",
      readTime: "7 min read",
    },
  ];

  const upcomingEvents = [
    { name: "Beginner Origami Workshop", date: "March 25, 2026" },
    { name: "Advanced Paper Sculpture", date: "April 10, 2026" },
  ];

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
            Blog & <span className="text-primary">Tutorials</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Learn, create, and get inspired with our guides, tutorials, and stories from the world of paper art.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Blog Posts */}
            <div className="lg:col-span-2 space-y-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-card rounded-3xl overflow-hidden shadow-lg cursor-pointer group"
                >
                  <div className="md:flex">
                    <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
                      <ImageWithFallback
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="md:w-3/5 p-8">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={16} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <h2 className="text-2xl mb-3 text-foreground group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>
                      <button className="text-primary hover:underline">Read More →</button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Upcoming Events */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-3xl p-8 shadow-lg sticky top-24"
              >
                <h3 className="text-2xl mb-6 text-foreground">Upcoming Events</h3>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="pb-4 border-b border-border last:border-0">
                      <h4 className="text-foreground mb-2">{event.name}</h4>
                      <p className="text-sm text-muted-foreground">{event.date}</p>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-6" onClick={() => navigate("/workshops")}>
                  View All Events
                </Button>
              </motion.div>

              {/* Services Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-secondary rounded-3xl p-8"
              >
                <h3 className="text-2xl mb-6 text-foreground">Our Services</h3>
                <div className="space-y-3">
                  <button
                    onClick={() => navigate("/workshops")}
                    className="block w-full text-left px-4 py-3 rounded-2xl bg-card hover:bg-primary/10 transition-colors text-foreground"
                  >
                    Workshops
                  </button>
                  <button
                    onClick={() => navigate("/products")}
                    className="block w-full text-left px-4 py-3 rounded-2xl bg-card hover:bg-primary/10 transition-colors text-foreground"
                  >
                    Products
                  </button>
                  <button
                    onClick={() => navigate("/services")}
                    className="block w-full text-left px-4 py-3 rounded-2xl bg-card hover:bg-primary/10 transition-colors text-foreground"
                  >
                    Installations
                  </button>
                </div>
              </motion.div>

              {/* Workshop CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-primary/10 rounded-3xl p-8 text-center"
              >
                <h3 className="text-2xl mb-4 text-foreground">Join a Workshop</h3>
                <p className="text-muted-foreground mb-6">
                  Learn paper art from expert instructors in hands-on sessions.
                </p>
                <Button onClick={() => navigate("/workshops")}>Book Now</Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
