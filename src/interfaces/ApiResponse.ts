interface ApiResponse<T> {
    results: T[];
    next?: string;
    previous?: string;
    count?: number;
  } 

  export default ApiResponse