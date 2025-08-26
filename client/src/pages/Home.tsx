import { Link } from "wouter";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  User,
  Code,
  Server,
  Rocket,
  Calendar,
  ArrowRight,
  MapPin,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const skills = {
    frontend: [
      {
        name: "Angular",
        color: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
      },
      {
        name: "React",
        color: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
      },
      {
        name: "TypeScript",
        color: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
      },
      {
        name: "Material UI",
        color: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
      },
      {
        name: "CSS",
        color: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
      },
      {
        name: "Javascript",
        color: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
      },
    ],
    backend: [
      {
        name: "C#/.NET",
        color:
          "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
      },
      {
        name: "Python",
        color:
          "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
      },
      {
        name: "SQL",
        color:
          "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
      },
      {
        name: "REST APIs",
        color:
          "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
      },
    ],
    tools: [
      {
        name: "Docker",
        color:
          "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
      },
      {
        name: "AWS",
        color:
          "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
      },
      {
        name: "Git",
        color:
          "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
      },
      {
        name: "CI/CD",
        color:
          "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
      },
      {
        name: "Kubernetes",
        color:
          "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
      },
    ],
  };

  const experience = [
    {
      title: "Engineer",
      company: "Xero",
      period: "2022 - Present",
      description:
        "Led decommission of Legacy API, improving system performance by 40%. Mentored junior engineers and implemented best practices for code quality.",
    },
    {
      title: "Software Engineer",
      company: "Bankwest",
      period: "2021 - 2022",
      description:
        "Built and deployed web and APIs in customer facing online banking sytem using .NET, Angular and AngularJS. Collaborated with design team to create responsive, user-friendly interfaces.",
    },
    {
      title: "Developer",
      company: "Student Edge",
      period: "2018 - 2021",
      description:
        "Developed new features and maintained the Student Edge Website. Focused on clean code practices and agile development methodologies.",
    },
  ];

  const blogPosts = [
    {
      title: "Building Scalable React Applications with TypeScript",
      excerpt:
        "Learn how to structure large React applications using TypeScript, exploring advanced patterns for component architecture, state management, and type safety...",
      date: "March 15, 2024",
      readTime: "5 min read",
      tags: ["React", "TypeScript", "Architecture"],
      slug: "building-scalable-react-applications",
      icon: <Code className="text-3xl text-white" />,
      gradient: "from-primary-500 to-indigo-600",
    },
    {
      title: "Microservices Architecture: Lessons from Production",
      excerpt:
        "Real-world insights from implementing microservices at scale, including common pitfalls, monitoring strategies, and when monoliths might be better...",
      date: "March 8, 2024",
      readTime: "8 min read",
      tags: ["Microservices", "DevOps", "Production"],
      slug: "microservices-architecture-lessons",
      icon: <Server className="text-3xl text-white" />,
      gradient: "from-green-500 to-emerald-600",
    },
    {
      title: "Modern Frontend Performance Optimization",
      excerpt:
        "Comprehensive guide to optimizing web applications for performance, covering code splitting, lazy loading, caching strategies, and Core Web Vitals...",
      date: "February 28, 2024",
      readTime: "6 min read",
      tags: ["Performance", "Web Vitals", "Optimization"],
      slug: "modern-frontend-performance",
      icon: <Rocket className="text-3xl text-white" />,
      gradient: "from-purple-500 to-pink-600",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800 transition-colors"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-primary-500 to-indigo-600 flex items-center justify-center">
              <User className="text-white text-4xl" data-testid="hero-avatar" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-indigo-600 bg-clip-text text-transparent">
              Prayatna Bhattarai
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Full-Stack Software Engineer passionate about building scalable
              web applications and sharing knowledge through code.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                onClick={() =>
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl transition-all"
                data-testid="button-view-work"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                asChild
                className="px-8 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-600 hover:text-white"
                data-testid="button-read-blog"
              >
                <Link href="/blog">Read My Blog</Link>
              </Button>
            </div>

            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-2xl"
                data-testid="link-github"
              >
                <Github />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-2xl"
                data-testid="link-linkedin"
              >
                <Linkedin />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-2xl"
                data-testid="link-twitter"
              >
                <Twitter />
              </a>
              <a
                href="mailto:alex.chen@email.com"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-2xl"
                data-testid="link-email"
              >
                <Mail />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-white dark:bg-slate-900 transition-colors"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              About Me
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I'm a passionate software engineer with 7+ years of experience
              building web applications. I love solving complex problems and
              creating efficient, scalable solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Technical Skills
              </h3>

              <div className="skill-category mb-6">
                <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">
                  Frontend
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-3 py-1 ${skill.color} rounded-full text-sm`}
                      data-testid={`skill-${skill.name
                        .toLowerCase()
                        .replace(".", "-")}`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="skill-category mb-6">
                <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">
                  Backend
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-3 py-1 ${skill.color} rounded-full text-sm`}
                      data-testid={`skill-${skill.name
                        .toLowerCase()
                        .replace(".", "-")}`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">
                  Tools & DevOps
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-3 py-1 ${skill.color} rounded-full text-sm`}
                      data-testid={`skill-${skill.name
                        .toLowerCase()
                        .replace("/", "-")
                        .replace(" ", "-")}`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Experience
              </h3>

              {experience.map((job, index) => (
                <div
                  key={index}
                  className="border-l-4 border-primary-500 pl-6 pb-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4
                      className="text-lg font-semibold text-gray-900 dark:text-white"
                      data-testid={`job-title-${index}`}
                    >
                      {job.title}
                    </h4>
                    <span
                      className="text-sm text-gray-500 dark:text-gray-400"
                      data-testid={`job-period-${index}`}
                    >
                      {job.period}
                    </span>
                  </div>
                  <p
                    className="text-primary-600 dark:text-primary-400 font-medium mb-2"
                    data-testid={`job-company-${index}`}
                  >
                    {job.company}
                  </p>
                  <p
                    className="text-gray-600 dark:text-gray-300 text-sm"
                    data-testid={`job-description-${index}`}
                  >
                    {job.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section
        id="blog"
        className="py-20 bg-gray-50 dark:bg-slate-800 transition-colors"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Latest Blog Posts
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I write about software development, technology trends, and lessons
              learned from building applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <Card
                key={post.slug}
                className="bg-white dark:bg-slate-900 shadow-lg hover:shadow-xl transition-shadow overflow-hidden group"
                data-testid={`blog-card-${post.slug}`}
              >
                <div
                  className={`aspect-video bg-gradient-to-br ${post.gradient} flex items-center justify-center`}
                >
                  {post.icon}
                </div>

                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span data-testid={`blog-date-${post.slug}`}>
                      {post.date}
                    </span>
                    <span className="mx-2">•</span>
                    <span data-testid={`blog-read-time-${post.slug}`}>
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    <Link
                      href={`/blog/${post.slug}`}
                      data-testid={`blog-title-link-${post.slug}`}
                    >
                      {post.title}
                    </Link>
                  </h3>

                  <p
                    className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3"
                    data-testid={`blog-excerpt-${post.slug}`}
                  >
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded"
                        data-testid={`blog-tag-${tag
                          .toLowerCase()
                          .replace(" ", "-")}-${post.slug}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors inline-flex items-center"
                    data-testid={`blog-read-more-${post.slug}`}
                  >
                    Read More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              asChild
              variant="outline"
              className="px-8 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-600 hover:text-white inline-flex items-center"
              data-testid="button-view-all-posts"
            >
              <Link href="/blog">
                View All Posts <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-white dark:bg-slate-900 transition-colors"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I'm always interested in new opportunities and interesting
              projects. Let's connect!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    Email
                  </h3>
                  <p
                    className="text-gray-600 dark:text-gray-300"
                    data-testid="contact-email"
                  >
                    alex.chen@email.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Linkedin className="text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    LinkedIn
                  </h3>
                  <p
                    className="text-gray-600 dark:text-gray-300"
                    data-testid="contact-linkedin"
                  >
                    linkedin.com/in/alexchen
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Github className="text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    GitHub
                  </h3>
                  <p
                    className="text-gray-600 dark:text-gray-300"
                    data-testid="contact-github"
                  >
                    github.com/alexchen
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    Location
                  </h3>
                  <p
                    className="text-gray-600 dark:text-gray-300"
                    data-testid="contact-location"
                  >
                    San Francisco, CA
                  </p>
                </div>
              </div>
            </div>

            <form
              className="space-y-6"
              onSubmit={handleSubmit}
              data-testid="contact-form"
            >
              <div>
                <Label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="w-full"
                  data-testid="input-name"
                />
              </div>

              <div>
                <Label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  className="w-full"
                  data-testid="input-email"
                />
              </div>

              <div>
                <Label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Subject
                </Label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What's this about?"
                  className="w-full"
                  data-testid="input-subject"
                />
              </div>

              <div>
                <Label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project or just say hello!"
                  className="w-full resize-none"
                  data-testid="textarea-message"
                />
              </div>

              <Button
                type="submit"
                className="w-full px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl transition-all"
                data-testid="button-send-message"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-slate-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold mb-4 text-primary-400">
                Prayatna Bhattarai
              </h3>
              <p className="text-gray-300 mb-4 max-w-md">
                Full-stack software engineer passionate about building scalable
                applications and sharing knowledge through code.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                  data-testid="footer-github"
                >
                  <Github className="text-xl" />
                </a>
                <a
                  href="https://linkedin.com"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                  data-testid="footer-linkedin"
                >
                  <Linkedin className="text-xl" />
                </a>
                <a
                  href="https://twitter.com"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                  data-testid="footer-twitter"
                >
                  <Twitter className="text-xl" />
                </a>
                <a
                  href="mailto:alex.chen@email.com"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                  data-testid="footer-email"
                >
                  <Mail className="text-xl" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                    data-testid="footer-link-home"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                    data-testid="footer-link-about"
                  >
                    About
                  </a>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                    data-testid="footer-link-blog"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                    data-testid="footer-link-contact"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Recent Posts</h4>
              <ul className="space-y-2">
                {blogPosts.slice(0, 3).map((post) => (
                  <li key={post.slug}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                      data-testid={`footer-recent-post-${post.slug}`}
                    >
                      {post.title.length > 30
                        ? `${post.title.substring(0, 30)}...`
                        : post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm" data-testid="footer-copyright">
              © 2024 Prayatna Bhattarai. All rights reserved.
            </p>
            <p
              className="text-gray-400 text-sm mt-4 md:mt-0"
              data-testid="footer-tech-stack"
            >
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
