import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "../components/Button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Products() {
  const [formData, setFormData] = useState({
    product: "",
    quantity: "",
    customization: "",
    name: "",
    phone: "",
    email: "",
    city: "",
  });

  const products = [
    {
      name: "Origami Wall Art",
      description: "Handcrafted paper art pieces perfect for home or office decor. Each piece is unique and made with precision.",
      image: "https://images.unsplash.com/photo-1768815210987-591340ed69fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmlnYW1pJTIwcGFwZXIlMjBhcnQlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzM4MzY2NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Paper Flowers",
      description: "Beautiful, long-lasting paper flowers that never wilt. Perfect for weddings, events, or gifts.",
      image: "https://images.unsplash.com/photo-1665953499482-9d8ef74bd269?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXBlciUyMGZsb3dlcnMlMjBoYW5kbWFkZXxlbnwxfHx8fDE3NzM4MzY2NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Origami Crane Sets",
      description: "Traditional origami cranes in various sizes and colors. Symbolizing peace and good fortune.",
      image: "https://images.unsplash.com/photo-1593976024153-7b31b96d1685?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXBlciUyMGNyYW5lJTIwb3JpZ2FtaXxlbnwxfHx8fDE3NzM4MDQwMzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Paper Lanterns",
      description: "Decorative paper lanterns that add warmth and ambiance to any space. Available in multiple designs.",
      image: "https://images.unsplash.com/photo-1613166766364-0e724ececb66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXBlciUyMGxhbnRlcm5zJTIwZGVjb3JhdGlvbnxlbnwxfHx8fDE3NzM4MzY2NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Geometric Paper Sculptures",
      description: "Modern, minimalist paper sculptures that make a bold statement. Perfect for contemporary spaces.",
      image: "https://images.unsplash.com/photo-1765162308598-e67b089969c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9tZXRyaWMlMjBwYXBlciUyMHNjdWxwdHVyZXxlbnwxfHx8fDE3NzM4MzY2NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Custom Paper Decorations",
      description: "Personalized paper decorations for special occasions. We bring your vision to life with custom designs.",
      image: "https://images.unsplash.com/photo-1737276719535-5c72b6f6495c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMHBhcGVyJTIwZGVjb3JhdGlvbnN8ZW58MXx8fHwxNzczODM2NjUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We will contact you within 24 hours with a quote.");
    setFormData({
      product: "",
      quantity: "",
      customization: "",
      name: "",
      phone: "",
      email: "",
      city: "",
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
            Handcrafted <span className="text-primary">Paper Products</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Discover our collection of beautiful, handmade paper art products. Each piece is crafted with
            care and attention to detail.
          </motion.p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 bg-card rounded-3xl overflow-hidden shadow-lg ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Image */}
              <div className={`h-80 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details */}
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-3xl mb-4 text-foreground">{product.name}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{product.description}</p>
                <div>
                  <Button onClick={() => {
                    setFormData({ ...formData, product: product.name });
                    document.getElementById("product-form")?.scrollIntoView({ behavior: "smooth" });
                  }}>
                    Get a Quote
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Product Quote Form */}
      <section id="product-form" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl text-center mb-4 text-foreground"
          >
            Request a Quote
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center text-muted-foreground mb-12"
          >
            We will contact you within 24 hours
          </motion.p>
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-card rounded-3xl p-8 shadow-lg space-y-6"
          >
            <div>
              <label className="block mb-2 text-foreground">Select Product *</label>
              <select
                required
                value={formData.product}
                onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select a product...</option>
                {products.map((product, index) => (
                  <option key={index} value={product.name}>
                    {product.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-foreground">Quantity</label>
                <input
                  type="number"
                  min="1"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
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

            <div>
              <label className="block mb-2 text-foreground">Customization Details</label>
              <textarea
                value={formData.customization}
                onChange={(e) => setFormData({ ...formData, customization: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 rounded-2xl bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                placeholder="Tell us about any customization you'd like..."
              ></textarea>
            </div>

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

            <div className="text-center">
              <Button type="submit">Submit Quote Request</Button>
            </div>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
