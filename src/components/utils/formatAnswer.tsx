export const formatAnswer = (answer: any[]) => {
  return answer.map((item, index) => {
    // Check if the item type is 'p'
    if (item.type === "p") {
      const content = item.props.children[0][0]; // Access the text content

      // If the content is empty or just <br>, return a <br> element
      if (content.trim() === "") {
        return <br key={index} />;
      }

      // Handle children elements within the <p>
      return (
        <p key={item.key}>
          {item.props.children.map((child: any, childIndex: number) => {
            // Check if the child is an array (which might contain multiple elements)
            if (Array.isArray(child)) {
              return child.map((nestedChild, nestedIndex) => {
                // Handle string content
                if (typeof nestedChild === "string") {
                  return nestedChild.trim() !== "" ? (
                    <span key={nestedIndex}>{nestedChild}</span>
                  ) : null; // Skip empty strings
                }

                // Handle nested elements like links
                if (
                  typeof nestedChild === "object" &&
                  nestedChild.type === "a"
                ) {
                  return (
                    <a
                      key={nestedChild.key}
                      href={nestedChild.props.href}
                      target={nestedChild.props.target}
                      rel={nestedChild.props.rel}
                      className="inline border-b border-dotted border-[#e02044] hover:border-solid"
                    >
                      {nestedChild.props.children}
                    </a>
                  );
                }

                return null; // Fallback for any other type
              });
            } else {
              // Handle string content directly
              if (typeof child === "string") {
                return child.trim() !== "" ? (
                  <span key={childIndex}>{child}</span>
                ) : null; // Skip empty strings
              }

              // Handle nested elements like links
              if (typeof child === "object" && child.type === "a") {
                return (
                  <a
                    key={child.key}
                    href={child.props.href}
                    target={child.props.target}
                    rel={child.props.rel}
                    className="inline border-b border-dotted border-[#e02044] hover:border-solid"
                  >
                    {child.props.children}
                  </a>
                );
              }
            }

            return null; // Fallback for any other types
          })}
        </p>
      );
    }
    return null; // Fallback for any other types
  });
};
