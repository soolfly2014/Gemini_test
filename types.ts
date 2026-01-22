
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  tag?: string;
}

export interface ForumTopic {
  id: string;
  title: string;
  author: string;
  authorAvatar: string;
  replies: number;
  lastPosted: string;
  lastPostedBy: string;
  category: string;
  pinned?: boolean;
}

export interface GameModule {
  id: string;
  title: string;
  description: string;
  level: string;
  icon: string;
  bg: string;
}
