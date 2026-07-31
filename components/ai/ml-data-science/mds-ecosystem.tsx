import Image from "next/image";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

type Logo =
  | { name: string; src: string }
  /** Fallback tile for marks with no official SVG available (see DaiTools) */
  | { name: string; abbr: string; color: string };

const GROUPS: { title: string; logos: Logo[] }[] = [
  {
    title: "AI and ML platforms",
    logos: [
      { name: "Azure OpenAI", src: "/assets/ai-platforms/azure.svg" },
      { name: "AWS SageMaker", src: "/assets/ml-platforms/sagemaker.svg" },
      { name: "Google Vertex AI", src: "/assets/ml-platforms/vertex-ai.svg" },
      { name: "Databricks", src: "/assets/ml-platforms/databricks.svg" },
      { name: "SAS Viya", src: "/assets/ml-platforms/sas.svg" },
    ],
  },
  {
    title: "LLM and GenAI frameworks",
    logos: [
      { name: "OpenAI GPT", src: "/assets/ai-platforms/openai.svg" },
      { name: "Anthropic Claude", src: "/assets/ai-platforms/anthropic.svg" },
      { name: "LangChain", src: "/assets/ai-platforms/langchain.svg" },
      { name: "LlamaIndex", src: "/assets/ml-platforms/llamaindex.svg" },
      { name: "Hugging Face", src: "/assets/ml-platforms/huggingface.svg" },
    ],
  },
  {
    title: "ML development",
    logos: [
      { name: "Python", src: "/assets/tech-stack/python.svg" },
      { name: "R", src: "/assets/ml-platforms/r.svg" },
      { name: "scikit-learn", src: "/assets/ml-platforms/scikit-learn.svg" },
      { name: "XGBoost", src: "/assets/ml-platforms/xgboost.png" },
      { name: "PyTorch", src: "/assets/ai-platforms/pytorch.svg" },
      { name: "TensorFlow", src: "/assets/tech-stack/tensorflow.svg" },
      { name: "MLflow", src: "/assets/ml-platforms/mlflow.svg" },
    ],
  },
  {
    title: "Data platforms and feature stores",
    logos: [
      { name: "Snowflake", src: "/assets/ml-platforms/snowflake.svg" },
      { name: "BigQuery", src: "/assets/ml-platforms/bigquery.svg" },
      { name: "Feast", src: "/assets/ml-platforms/feast.svg" },
      { name: "Tecton", abbr: "Te", color: "#D2540F" },
      { name: "Apache Spark", src: "/assets/ml-platforms/apache-spark.svg" },
    ],
  },
  {
    title: "Deployment and MLOps",
    logos: [
      { name: "Kubernetes", src: "/assets/ml-platforms/kubernetes.svg" },
      { name: "Azure ML", src: "/assets/ai-platforms/azure.svg" },
      { name: "Seldon", abbr: "Se", color: "#D2453E" },
      { name: "BentoML", src: "/assets/ml-platforms/bentoml.svg" },
    ],
  },
  {
    title: "Visualization and BI",
    logos: [
      { name: "Power BI", src: "/assets/ml-platforms/power-bi.svg" },
      { name: "Tableau", src: "/assets/ml-platforms/tableau.svg" },
    ],
  },
];

export function MdsEcosystem() {
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead
        label="Tech & tools"
        title="Supported AI and analytics ecosystem"
        sub="Our teams bring hands-on production experience across the full AI/ML development, orchestration, and deployment ecosystem."
        className="mb-12 max-w-[720px]"
      />
      <div className="flex flex-col gap-8">
        {GROUPS.map((group) => (
          <div key={group.title}>
            <h3 className="mb-4 font-sans font-semibold text-[15px] text-fg2 tracking-[0.02em]">
              {group.title}
            </h3>
            <ul className="m-0 grid list-none grid-cols-2 gap-3 p-0 sm:grid-cols-3 md:grid-cols-4">
              {group.logos.map((logo) => (
                <li
                  key={logo.name}
                  className="flex items-center gap-3.5 rounded-(--r-md) border border-border bg-white px-5 py-4"
                >
                  <span className="relative flex h-8 w-8 shrink-0 items-center justify-center">
                    {"src" in logo ? (
                      <Image
                        src={logo.src}
                        alt={`${logo.name} logo`}
                        title={logo.name}
                        width={32}
                        height={32}
                        className="h-8 w-8 object-contain"
                        unoptimized
                      />
                    ) : (
                      <span
                        className="flex h-8 w-8 items-center justify-center rounded-[8px] border font-bold font-sans text-[13px]"
                        style={{
                          background: `${logo.color}1A`,
                          borderColor: `${logo.color}40`,
                          color: logo.color,
                        }}
                        title={logo.name}
                      >
                        {logo.abbr}
                      </span>
                    )}
                  </span>
                  <span className="font-sans font-semibold text-[14.5px] text-fg1">
                    {logo.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </LightSection>
  );
}
