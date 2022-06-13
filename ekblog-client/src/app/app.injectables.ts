import {PostService} from "./services/post.service";
import {PostSectionService} from "./services/post-section.service";
import {PostCommentService} from "./services/post-comment.service";
import {ContactService} from "./services/contact.service";

const serverUrl = 'http://localhost:8091';

const valueInjectables: Array<any> = [
  {provide: "EKB_POST_API_URL", useValue: `${serverUrl}/api/post`},
  {provide: "EKB_POST_SECTION_API_URL", useValue: `${serverUrl}/api/post/section`},
  {provide: "EKB_POST_COMMENT_API_URL", useValue: `${serverUrl}/api/post/comment`},
  {provide: "EKB_CONTACT_API_URL", useValue: `${serverUrl}/api/contact`},
];

const serviceInjectables: Array<any> = [
  {provide: PostService, useClass: PostService},
  {provide: PostSectionService, useClass: PostSectionService},
  {provide: PostCommentService, useClass: PostCommentService},
  {provide: ContactService, useClass: ContactService},
];

export const APP_INJECTABLES = [
  ...valueInjectables,
  ...serviceInjectables
]
