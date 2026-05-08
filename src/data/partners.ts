import { Partner, TechStackItem } from "@/types";

export const partners: Partner[] = [
  { name: "Universal Robots", logo: "/images/partners/universal-robots.png", certified: true, category: "hardware" },
  { name: "ABB", logo: "/images/partners/abb.png", certified: true, category: "hardware" },
  { name: "Siemens", logo: "/images/partners/siemens.png", certified: true, category: "hardware" },
  { name: "NVIDIA", logo: "/images/partners/nvidia.png", certified: false, category: "software" },
  { name: "Yaskawa", logo: "/images/partners/yaskawa.png", certified: true, category: "hardware" },
  { name: "Danfoss", logo: "/images/partners/danfoss.png", certified: false, category: "hardware" },
  { name: "Magnetek", logo: "/images/partners/magnetek.png", certified: false, category: "hardware" },
  { name: "Sumitomo", logo: "/images/partners/sumitomo.png", certified: false, category: "hardware" },
];

export const techStack: TechStackItem[] = [
  { name: "ROS2", logo: "/images/partners/ros2.png" },
  { name: "AWS", logo: "/images/partners/aws.png" },
  { name: "Google Cloud", logo: "/images/partners/google-cloud.png" },
  { name: "Azure", logo: "/images/partners/azure.png" },
];
