// TODO create a generic interface for page params for dynaic routes

export interface PageParams<T extends object> {
  params: T;
}
