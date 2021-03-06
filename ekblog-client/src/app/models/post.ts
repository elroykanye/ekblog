import {PostSection} from "./post-section";

export interface Post {
  id: number;
  image: number[];
  title: string;
  draft: boolean;
  sections: PostSection[];
  createdAt?: string;
  numberOfComments?: number;
}

export interface PostDisplay {
  id: number;
  image: number[];
  title: string;
  introText: string
}


export module PostUtil {
  export const getFirstSection = (post: Post): PostSection => {
    let section: PostSection = post.sections[0];
    for (let i = 0; i < post.sections.length; i++) {
      if (post.sections[i].order < section.order) {
        section = post.sections[i];
      }
    }
    return section;
  }

  export const getIntroText = (post: Post): string => {
    let section: PostSection = getFirstSection(post);
    if (section.content.length > 128) {
      return `${section.content.substring(0, 128)}...`;
    }
    return section.content;
  }
  export const getPostDisplays = (posts: Post[]): PostDisplay[] => {
    let postDisplays: PostDisplay[] = [];
    for (let i = 0; i < posts.length; i++) {
      if (!posts[i].draft && posts[i].draft != null) {
        postDisplays.push({
          id: posts[i].id,
          image: posts[i].image,
          title: posts[i].title,
          introText: getIntroText(posts[i])
        });
      }
    }
    return postDisplays;
  }
}

export const defaultPost: Post = {
  id: 0,
  image: [],
  title: '',
  draft: true,
  sections: [],
  createdAt: '',
  numberOfComments: 0
}
export const DEFAULT_POSTS_DISPLAY: PostDisplay[] = [
  {
    id: -1,
    image: [],
    title: "How to get started with Angular",
    introText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis..."
  },
  {
    id: -1,
    image: [],
    title: "How to get started with Angular",
    introText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis..."
  },
  {
    id: -1,
    image: [],
    title: "How to get started with Angular",
    introText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis..."
  }
];
