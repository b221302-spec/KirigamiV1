import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function About() {
  const teamMembers = [
    {
      name: "Priya Sharma",
      role: "Founder & Lead Artist",
      image: "https://images.unsplash.com/photo-1762522921456-cdfe882d36c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsJTIwaGVhZHNob3R8ZW58MXx8fHwxNzczODM2NjU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Rahul Kumar",
      role: "Workshop Coordinator",
      image: "https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBzbWlsaW5nJTIwcG9ydHJhaXQlMjBidXNpbmVzc3xlbnwxfHx8fDE3NzM4MzY2NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Anita Desai",
      role: "Installation Designer",
      image: "https://images.unsplash.com/photo-1565069859254-6248c5a4bc67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHBlb3BsZSUyMHNtaWxpbmclMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzM4MzY2NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const journeySteps = [
    {
      year: "2020",
      title: "The Beginning",
      description: "Kirigami Arts was founded with a vision to make paper art accessible to everyone. Starting with small community workshops, we discovered the joy of teaching and sharing this beautiful art form.",
    },
    {
      year: "2021",
      title: "Growing Community",
      description: "Expanded to corporate workshops and educational programs. Our first major installation was featured at the Mumbai Art Festival, gaining recognition in the art community.",
    },
    {
      year: "2022",
      title: "New Horizons",
      description: "Launched our product line and became official event partners for major festivals. Collaborated with schools and organizations across India to promote paper art education.",
    },
    {
      year: "2023",
      title: "National Recognition",
      description: "Featured in national media and art publications. Completed installations for prestigious galleries and corporate spaces. Trained over 5,000 participants in workshops.",
    },
    {
      year: "2024",
      title: "Innovation & Expansion",
      description: "Introduced advanced techniques and specialized workshops. Partnered with international artists for collaborative installations. Opened dedicated studio spaces in multiple cities.",
    },
    {
      year: "2025-26",
      title: "Creative Ecosystem",
      description: "Kirigami Arts has evolved into a thriving creative ecosystem, fostering a community of artists, educators, and enthusiasts who share a passion for paper art.",
    },
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
            About <span className="text-primary">Kirigami Arts</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Transforming paper into art, one fold at a time. Discover our story, our team, and our mission.
          </motion.p>
        </div>
      </section>

      {/* What is Kirigami Arts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl p-8 md:p-12 shadow-lg"
          >
            <h2 className="text-3xl sm:text-4xl mb-8 text-foreground text-center">What is Kirigami Arts?</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Kirigami Arts</strong> is more than a creative studio—it's a
                movement to democratize art and make creativity accessible to everyone. We believe that art isn't
                meant to stay confined within gallery walls. It should be part of everyday life, bringing joy,
                wonder, and self-expression to people of all ages and backgrounds.
              </p>
              <p>
                Through the simple yet profound medium of paper, we create experiences that inspire imagination,
                foster connection, and celebrate the beauty of handmade art. Whether it's a child folding their
                first crane, a team collaborating on an installation, or an artist mastering complex techniques,
                we're here to guide, support, and celebrate every creative journey.
              </p>
              <p>
                Our work spans workshops, installations, products, and partnerships—all united by a passion for
                paper art. We're proud to be a space where curious minds gather, learn, create, and share. At
                Kirigami Arts, every fold tells a story, and every creation is a celebration of human creativity.
              </p>
              <p>
                We envision a world where creativity is celebrated, where art is accessible, and where simple
                materials like paper can transform spaces and lives. Join us in this journey of folding, cutting,
                and creating magic with paper.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl text-center mb-16 text-foreground"
          >
            Meet the Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-card rounded-3xl overflow-hidden shadow-lg text-center"
              >
                <div className="h-80 overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl mb-2 text-foreground">{member.name}</h3>
                  <p className="text-primary">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl text-center mb-16 text-foreground"
          >
            Our Journey
          </motion.h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:-translate-x-1/2"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {journeySteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-start ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Year badge */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg z-10">
                    <span className="text-sm font-bold">{step.year}</span>
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-24 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}
                  >
                    <div className="bg-card rounded-3xl p-8 shadow-lg">
                      <h3 className="text-2xl mb-4 text-foreground">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary to-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl p-12 shadow-lg"
          >
            <h2 className="text-3xl sm:text-4xl mb-6 text-foreground">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              To inspire creativity, foster connection, and celebrate the art of paper folding through
              accessible workshops, stunning installations, and beautiful handcrafted products.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe in the power of simple materials to create extraordinary experiences, and we're
              committed to sharing this magic with the world—one fold at a time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
