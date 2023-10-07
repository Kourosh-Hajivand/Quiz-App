import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React, { useState } from "react";
interface CustomError {
  response: {
    status: number;
  };
}
const ReactQueryWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: Infinity, // 5 minutes
            cacheTime: 1000000, // 10 minutes
            retry: (failureCount: number, error: CustomError) => {
              // Retry only if the error status code is not 404
              if (
                error.response.status === 404 ||
                error.response.status === 401
              ) {
                return false; // Do not retry
              }
              // Retry for other errors
              return (failureCount = 1); // Retry for up to 5 times
            },
          },
        },
      })
  );
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      {children}
    </QueryClientProvider>
  );
};
export default ReactQueryWrapper;
