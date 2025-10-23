export interface FeatredCardProps {
  icon: string | any;
  title: string;
  content: string;
  index: number;
}

export interface ButtonProps {
  styles?: string;
}

export interface FeedBackProps {
  content: string;
  title: string;
  name: string;
  img: string | any;
}

export interface ServiceCardProps {
  icon: any;
  title: string;
  description: string;
  features: string[];
  index: number;
}
