import SanityClient from "@sanity/client";

const client = new SanityClient({
    projectId: "y17or4ty",
    dataset: "production"
});

export default client;
