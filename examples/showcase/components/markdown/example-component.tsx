import HelloWorld from "@/content/examples/querying-data/hello-world-action"
import IncrementExample from "@/content/examples/querying-data/increment-example"
import RandomNumberExampleDisplay from "@/content/examples/querying-data/random-number-example-display"
import RandomNumberExampleRefetch from "@/content/examples/querying-data/random-number-example-refetch"
import { memo } from "react"

function ExampleComponent({ id }: { id: string }) {
  switch (id) {
    case "random-number-example-display":
      return <RandomNumberExampleDisplay />
    case "random-number-example-refetch":
      return <RandomNumberExampleRefetch />
    case "hello-world-action":
      return <HelloWorld />
    case "increment-example":
      return <IncrementExample />
    default:
      return <div className="p-4 border rounded">{id}</div>
  }
}

export default memo(ExampleComponent)
