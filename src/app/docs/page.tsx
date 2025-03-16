import specs from "@docs/swagger.json";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

export default function page() {
  return <SwaggerUI spec={specs}></SwaggerUI>;
}
