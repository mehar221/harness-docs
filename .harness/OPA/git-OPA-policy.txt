package pipeline

# Define the allowed infrastructure connector
allowed_infra_connector := "harnessk8sconnector"

deny[msg] {
    input.pipeline.stages[_].stage.spec.infrastructure.infrastructureDefinition.spec.connector.identifier != allowed_infra_connector

    msg := sprintf("Infrastructure connector '%s' is not allowed. Allowed connector: '%s'", 
                   [input.pipeline.stages[_].stage.spec.infrastructure.infrastructureDefinition.spec.connector.identifier, 
                    allowed_infra_connector])
}
